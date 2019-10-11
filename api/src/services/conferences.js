const MongoLib = require('../lib/mongo');

class ConferencesService {
  constructor() {
    this.collection = 'conferences';
    this.mongoDB = new MongoLib();
  }

  async getConferences({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const conferences = await this.mongoDB.getAll(this.collection, query);
    return conferences || [];
  }

  async getConference({ conferenceId }) {
    const conference = await this.mongoDB.get(this.collection, conferenceId);
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