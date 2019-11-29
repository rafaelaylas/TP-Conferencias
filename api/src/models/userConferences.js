const joi = require('@hapi/joi');

const { conferenceIdSchema } = require('./conferences');
const { userIdSchema } = require('./users');

const userConferenceIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUserConferenceSchema = {
    userId: userIdSchema,
    conferenceId: conferenceIdSchema
};

module.exports = {
    userConferenceIdSchema,
    createUserConferenceSchema};