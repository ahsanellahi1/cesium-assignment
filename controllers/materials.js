const Material = require("../models/material");

const getAll = (_req, res) => {
  const materials = Material.getAll();

  res.status(200).json({
    materials,
    message: "Successfuly fetched all materials.",
  });
};

const get = (req, res) => {
  const material = Material.get(req.params.id);

  res.status(200).json({
    material,
    message: "Successfuly fetch material.",
  });
};

const add = (req, res) => {
  const material = Material.add(req.body);

  res.status(200).json({
    material,
    message: "Successfuly added materials",
  });
};

const update = (req, res) => {
  Material.update(req.body);

  res.status(200).json({
    message: "Successfuly updated material.",
  });
};

const remove = (req, res) => {
  Material.remove(req.params.id);

  res.status(200).json({
    message: "Successfuly removed material.",
  });
};

module.exports = {
  getAll,
  get,
  add,
  update,
  remove,
};
