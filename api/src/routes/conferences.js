const express = require('express');
const ConferencesService = require('../services/conferences');

const {
  conferenceIdSchema,
  createConferenceSchema,
  updateConferenceSchema
} = require('../models/conferences');


function conferencesApi(app) {
  const router = express.Router();
  app.use('/api/conferences', router);

  const conferencesService = new ConferencesService();

  router.get('/', async function(req, res, next) {
    const { tags } = req.query;

    try {
      const conferences = await conferencesService.getConferences({ tags });

      res.status(200).json({
        data: conferences,
        message: 'conferences listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(('/:conferenceId'),
    async function(req, res, next) {
      const { conferenceId } = req.params;

      try {
        const conferences = await conferencesService.getConference({ conferenceId });

        res.status(200).json({
          data: conferences,
          message: 'conference retrieved'
        });
      } catch (err) {
        next(err);
      }
    }
    );

  router.post('/', async function(
    req,
    res,
    next
  ) {
    const { body: conference } = req;
    try {
      const createdConferenceId = await conferencesService.createConference({ conference });

      res.status(201).json({
        data: createdConferenceId,
        message: 'conference created'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put(
    '/:conferenceId',
    async function(req, res, next) {
      const { conferenceId } = req.params;
      const { body: conference } = req;

      try {
        const updatedConferenceId = await conferencesService.updateConference({
          conferenceId,
          conference
        });

        res.status(200).json({
          data: updatedConferenceId,
          message: 'conference updated'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:conferenceId',
    async function(req, res, next) {
      const { conferenceId } = req.params;

      try {
        const deletedConferenceId = await conferencesService.deleteConference({ conferenceId });

        res.status(200).json({
          data: deletedConferenceId,
          message: 'conference deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = conferencesApi;