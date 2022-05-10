const { FALLBACK_ERROR_MESSAGE } = require('../constants.js');

const withErrorHandler = (controllerCallback) => async (req, res, next) => {
  try {
    await controllerCallback(req, res, next);
  } catch (error) {
    res.status(500).json({
      errorMessage: error.message || FALLBACK_ERROR_MESSAGE,
    });
  }
};

module.exports = {
  withErrorHandler,
};
