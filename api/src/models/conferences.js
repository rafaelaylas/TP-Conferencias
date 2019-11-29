const joi = require('@hapi/joi');

const conferenceIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const conferenceCoverSchema = joi.string().uri().required();
const conferenceTitleSchema =  joi.string().max(80).required();
const conferenceDateSchema =  joi.string().max(80).required();
const conferenceTypeSchema =  joi.string().max(80).required();
const conferenceSpeakerSchema =  joi.string().max(80).required()
const conferenceUserSchema =  joi.array().optional()


const createConferenceSchema = {

    cover: conferenceCoverSchema.required(),
    title: conferenceTitleSchema.required(),
    date: conferenceDateSchema.required(),
    description: conferenceTypeSchema.required(),
    speaker: conferenceSpeakerSchema.required()

}

const updateConferenceSchema = {

    cover: conferenceCoverSchema,
    title: conferenceTitleSchema,
    date: conferenceDateSchema,
    description: conferenceTypeSchema,
    speaker: conferenceSpeakerSchema

}



module.exports = {
    conferenceIdSchema,
    createConferenceSchema,
    updateConferenceSchema
}