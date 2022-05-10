const request = require("supertest");
const app = require("../app");

describe("Material Endpoints", () => {
  it("should create a new material", async () => {
    const res = await request(app).post("/materials").send({
      name: "One",
      volume: 1.0,
      cost: 1.0,
      color: "#44D7B6",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual("Successfuly added materials");
    expect(res.body).toHaveProperty("material");
  });

  it("should get materials", async () => {
    const res = await request(app).get("/materials").send();

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual("Successfuly fetched all materials.");
    expect(res.body).toHaveProperty("materials");
    expect(res.body.materials.length).toBe(1);
  });

  it("should update a material", async () => {
    const materialId = (await request(app).get("/materials").send()).body
      .materials[0].id;

    const res = await request(app).put(`/materials/${materialId}`).send({
      id: materialId,
      name: "OneOne",
      volume: 1.0,
      cost: 1.0,
      color: "#44D7B6",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual("Successfuly updated material.");
  });

  it("should remove materials", async () => {
    const materialId = (await request(app).get("/materials").send()).body
      .materials[0].id;

    const res = await request(app).delete(`/materials/${materialId}`).send();

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual("Successfuly removed material.");
  });
});
