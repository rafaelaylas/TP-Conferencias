const express = require('express');
const ConferencesService = require('../services/conferences');

// const {
//   conferenceIdSchema,
//   createConferenceSchema,
//   updateConferenceSchema
// } = require('../models/conferences');


function conferencesApi(app) {
  const router = express.Router();
  app.use('/api/conferences', router);

  const conferencesService = new ConferencesService();

  router.get('/', async function(req, res) {
   
    var query = {};
    if(req.query.favorite) query.favorite = req.query.favorite;
    if(req.query.search) query.search = req.query.search;

    const { tags } = req.query;
     console.log(query);
    // console.log(req.query);

    try {
      const conferences = await conferencesService.getConferences(query);

    // var query = {};
    // if(req.query.favorite) query.favorite = req.query.favorite;
    // if(req.query.search) query.search = req.query.search;

    //   conferences.find(query, function (err, conferences) {
    //     if(err) return res.json({status : 500, error : err});
    //     if(!conferences) return res.json({status : 404, error : "Contact not found"});

    //     return res.json(conferences);
    // });  

      res.status(200).json({
        data: {
          "mylist": [],
          "trends": conferences,
          "originals": [],
        },
        message: 'conferences listed'
       
      });
      console.log(res.data)
    } catch (err) {
      console.log(err);
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


    // Obtener las conferencia de un usuario
    router.get(('/conferenceByUser/:userId'),
    async function(req, res, next) {
      const { userId } = req.params;

      // console.log(req.params);
      try {
        const conferences = await conferencesService.getByUser({ userId });

        res.status(200).json({
          data: conferences,
          message: 'conference user retrieved'
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

  // Borrar de las conferencias un usuario
  router.put(
    '/delete/:conferenceId/:userId',
    async function(req, res, next) {
      const { conferenceId, userId } = req.params;

      try {

        const conference = await conferencesService.getConference({ conferenceId });

        if(!Array.isArray(conference.user)){
          conference.user = [];
        }
       
        const positionUser = conference.user.indexOf(userId)
        conference.user.splice(positionUser, 1)
    
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


  // Agregar a las conferencias un usuario
  router.put(
    '/:conferenceId/:userId',
    async function(req, res, next) {
      const { conferenceId, userId } = req.params;

      try {

        const conference = await conferencesService.getConference({ conferenceId });

        if(!Array.isArray(conference.users)){
          conference.users = [];
        }
        if( !conference.users.includes(userId)){
          conference.users.push(userId);
        }
    
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