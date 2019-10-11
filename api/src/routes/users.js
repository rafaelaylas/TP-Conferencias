const express = require('express');
const UsersService = require('../services/users');

// const {
//   userIdSchema,
//   createUserSchema,
// } = require('../models/users');


function usersApi(app) {
  const router = express.Router();
  app.use('/api/users', router);

  const usersService = new UsersService();

  router.get('/', async function(req, res, next) {
    const { tags } = req.query;

    try {
      const users = await usersService.getUsers({ tags });

      res.status(200).json({
        data: users,
        message: 'users listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function(
    req,
    res,
    next
  ) {
    const { body: user } = req;
    try {
      const createdUserId = await usersService.createUser({ user });

      res.status(201).json({
        data: createdUserId,
        message: 'user created'
      });
    } catch (err) {
      next(err);
    }
  });

}

module.exports = usersApi;