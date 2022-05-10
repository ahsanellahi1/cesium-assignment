const { body, param } = require("express-validator");

const { Validation } = require("../constants");

const nameValidator = body("name")
  .isString()
  .withMessage("Name must be a string.")
  .notEmpty()
  .withMessage("Name should contain at least one character.");

const colorValidator = body("color")
  .isHexColor()
  .withMessage("Color must be valid hex value.");

const volumeValidator = body("volume")
  .isFloat({
    min: Validation.Materials.MinVolumne,
  })
  .withMessage("Volume should be a float greater than or equal to 0.");

const costValidator = body("cost")
  .isFloat({
    min: Validation.Materials.MinCost,
  })
  .withMessage("Cost should be a float greater than or equal to 0");

const dateValidator = body("deliveryDate")
  .optional()
  .isDate({
    format: Validation.Materials.DateFormat,
  })
  .withMessage(
    `deliveryDate should be formatted as ${Validation.Materials.DateFormat}`
  );

const paramIdValidator = param("id").isUUID();

// Validators for corresponding routes

const getAll = [];

const get = [paramIdValidator];

const add = [
  nameValidator,
  colorValidator,
  volumeValidator,
  costValidator,
  dateValidator,
];

const update = [...add, paramIdValidator];

const remove = [paramIdValidator];

module.exports = {
  getAll,
  get,
  add,
  update,
  remove,
};
