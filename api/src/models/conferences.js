const joi = require('@hapi/joi');

const conferenceIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);


const createConferenceSchema = {

    title:  joi.string().max(80).required(),
    date:  joi.string().max(80).required(),
    type:  joi.string().max(80).required(),
    speaker:  joi.string().max(80).required()

}


module.exports = {
    conferenceIdSchema,
    createConferenceSchema,
}