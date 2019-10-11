const  MongoLib = require('../lib/mongo');

class UserConferencesService {
    constructor(){
        this.collection = "user-conferences";
        this.mongoDB = new MongoLib();
    }

    async getUserConferences({ userId }){
        const query = userId && { userId };
        const userConferences = await this.mongoDB.getAll(this.collection, query);
        return userConferences || [];
    }

    async createUserConference({ userConference }){
        const createdUserConferenceId = await this.mongoDB.create(this.collection, userConference);
        return createdUserConferenceId;
    }

    async deleteUserConference({ userConference }){
        const deletedUserIdConference = await this.mongoDB.delete(this.collection, userConference);
        return deletedUserIdConference;
    }
}

module.exports = UserConferencesService;