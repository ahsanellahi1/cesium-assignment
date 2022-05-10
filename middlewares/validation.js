const { validationResult } = require('express-validator');

const validation = (validators) => [
  validators,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });

      return;
    }

    if (next) next();
  },
];

module.exports = validation;
