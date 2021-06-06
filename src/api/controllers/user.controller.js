const userServices = require("../services/user.services");
const {
  responseSuccess,
  responseWithError,
} = require("../../helper/messageResponse");
const { ErrorCodes } = require("../../helper/constants");

exports.createUser = async (req, res, next) => {
  try {
    const user = await userServices.createUser(req.body);
    return res.json(responseSuccess(user));
  } catch (error) {
    return res.json(
      responseWithError(
        ErrorCodes.ERROR_CODE_SYSTEM_ERROR,
        `SYSTEM ERROR ${error.message}`
      )
    );
  }
};

exports.userDetail = async (req, res, next) => {
  try {
    const user = await userServices.userDetail(req.body);
    return res.json(responseSuccess(user));
  } catch (error) {
    return res.json(
      responseWithError(
        ErrorCodes.ERROR_CODE_SYSTEM_ERROR,
        `SYSTEM ERROR ${error.message}`
      )
    );
  }
};
