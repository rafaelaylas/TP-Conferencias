const express = require('express');
const UserConferencesService = require('../services/userConferences');

function userConferencesApi(app) {
  const router = express.Router();
  app.use('/api/user-conferences', router);

  const userConferencesService = new UserConferencesService();

  router.get(
    '/', 
    async function(req, res, next) {
      const { userId } = req.query;

      try {
        const userConferences = await userConferencesService.getUserConferences({ userId });

        res.status(200).json({
          data: userConferences,
          message: 'user conferences listed'
        });
      } catch (err) {
        next(err);
      }
    }
    );
  
    router.get(('/:userId'),
    async function(req, res, next) {
      const { userId } = req.params;

      try {
        const userIDConference = await userConferencesService.getUserConferences({ userId });

        res.status(200).json({
          data: userIDConference,
          message: 'userIdConference retrieved'
        });
      } catch (err) {
        next(err);
      }
    }
    );


  router.post('/', 
   async function(
    req,
    res,
    next
   ) {
    const { body: userConference } = req;
    try {
      const createUserConferenceSchema = await userConferencesService.createUserConference({ userConference });

      res.status(201).json({
        data: createUserConferenceSchema,
        message: 'user conference created'
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete(
    '/:userConferenceId',
    async function(req, res, next) {
      const { userConferenceId } = req.params;

      try {
        const deletedUserConferenceId = await userConferencesService.deleteUserConference({ userConferenceId });

        res.status(200).json({
          data: deletedUserConferenceId,
          message: 'user conference deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = userConferencesApi;