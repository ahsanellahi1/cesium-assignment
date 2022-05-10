const { v4: uuidV4 } = require("uuid");

let materials = [];

const add = (data) => {
  const id = uuidV4();

  const material = { ...data, id };

  materials.push(material);

  return material;
};

const get = (id) => materials.find((value) => value.id === id);

const getAll = () => materials;

const update = (data) => {
  materials = materials.map((value) => (value.id === data.id ? data : value));
};

const remove = (id) => {
  materials = materials.filter((value) => value.id !== id);
};

module.exports = {
  add,
  get,
  getAll,
  update,
  remove,
};
