const Joi = require('joi');

module.exports = {
  // POST /v1/user/register
  register: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6).max(128),
      displayName: Joi.string().required(),
      phoneNumber: Joi.string().required().min(10).max(13),
    },
  },
};
