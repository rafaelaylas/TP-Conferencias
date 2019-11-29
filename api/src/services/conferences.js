const MongoLib = require('../lib/mongo');
const UsersService = require('../services/users');
const SendMail = require('../services/sendMail');

class ConferencesService {
  constructor() {
    this.collection = 'conferences';
    this.mongoDB = new MongoLib();
    this.userService = new UsersService();
    this.sendMail = new SendMail();
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

  async sendMailCancelConference({ conferenceId }){

    const conference = await this.getConference({ conferenceId });
    if(Array.isArray(conference.users) && conference.users.length > 0){
      const mailsList = [];

      for( let id of conference.users){
        const result = await this.userService.getUser({id});
        mailsList.push(result.email);
      }

      console.log(mailsList);

      if(mailsList.length > 0){
        this.sendMail.sendList(mailsList, { conference });
      }
    }
  }
}

module.exports = ConferencesService;