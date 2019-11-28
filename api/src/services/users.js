const MongoLib = require('../lib/mongo');

class UsersService {
  constructor() {
    this.collection = 'users';
    this.mongoDB = new MongoLib();
  }


  async getUsers({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const users = await this.mongoDB.getAll(this.collection, query);
    return users || [];
  }
  
  async getUser({ email }) {
    const [user] = await this.mongoDB.getAll(this.collection, { email});
    return user;
  }

  async createUser({ user }) {

    const result = await this.getUser(user);

    if(!result){
      const createUserId = await this.mongoDB.create(this.collection, user);
      return createUserId;
    }
    return null;

    
  }
}

module.exports = UsersService;