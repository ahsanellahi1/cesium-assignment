const express = require("express");
const router = express.Router();

const MaterialController = require("../controllers/materials");
const MaterialValidators = require("../validators/materials");

const { withErrorHandler } = require("../helpers");
const validation = require("../middlewares/validation");

router.get(
  "/",
  validation(MaterialValidators.getAll),
  withErrorHandler(MaterialController.getAll)
);

router.get(
  "/:id",
  validation(MaterialValidators.get),
  withErrorHandler(MaterialController.get)
);

router.post(
  "/",
  validation(MaterialValidators.add),
  withErrorHandler(MaterialController.add)
);

router.put(
  "/:id",
  validation(MaterialValidators.update),
  withErrorHandler(MaterialController.update)
);

router.delete(
  "/:id",
  validation(MaterialValidators.remove),
  withErrorHandler(MaterialController.remove)
);

module.exports = router;
