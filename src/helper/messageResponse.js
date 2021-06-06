const { ErrorCodes } = require('./constants');

exports.responseSuccess = (data, message = 'Success') => ({
  code: ErrorCodes.ERROR_CODE_SUCCESS,
  message,
  data,
});

exports.responseWithError = (errorCode, message, data = {}) => ({
  code: errorCode,
  message,
  data,
});

