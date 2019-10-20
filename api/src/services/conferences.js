const MongoLib = require('../lib/mongo');

class ConferencesService {
  constructor() {
    this.collection = 'conferences';
    this.mongoDB = new MongoLib();
  }

// en tag me viene el query del endpoint
// { favorite: 'id_user', search: 'hola' }
  async getConferences(query) {
    let queryMongo = {};

    if (query.search) {
      queryMongo = {
        $or: [
          {'speaker': {'$regex': query.search, '$options': 'i'}}, 
          {'title': {'$regex': query.search, '$options': 'i'}}
        ]
      }
    }

    const conferences = await this.mongoDB.getAll(this.collection, queryMongo);
    return conferences || [];
  }

  async getConference({ conferenceId }) {
    const conference = await this.mongoDB.get(this.collection, conferenceId);
    return conference || {};
  }

  async getByUser({ userId }) {
    const conference = await this.mongoDB.getAll(this.collection, {
      users :{$all: [userId]}
    });
    return conference || {};
  }

  async createConference({ conference }) {
    const createConferenceId = await this.mongoDB.create(this.collection, conference);
    return createConferenceId;
  }

  async updateConference({ conferenceId, conference } = {}) {
    const updatedConferenceId = await this.mongoDB.update(
      this.collection,
      conferenceId,
      conference
    );
    return updatedConferenceId;
  }

  async deleteConference({ conferenceId }) {
    const deletedConferenceId = await this.mongoDB.delete(this.collection, conferenceId);
    return deletedConferenceId;
  }
}

module.exports = ConferencesService;