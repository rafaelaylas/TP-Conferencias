const joi = require('@hapi/joi');

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);


const createUserSchema = {

    name:  joi.string().max(80).required(),
    email:  joi.string().max(80).required(),
    password:  joi.string().max(80).required()
}


module.exports = {
    userIdSchema,
    createUserSchema,
}