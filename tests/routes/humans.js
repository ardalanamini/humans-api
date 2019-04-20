/* global describe,it */

const supertest = require("supertest");
const app = require("../../bootstrap");
const humansData = require("../../data/humans.json");
const petsData = require("../../data/pets.json");

describe("Testing '/v1/humans' routes", () => {
  it("Should send humans.", done => {
    supertest(app)
      .get("/v1/humans")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect(
        {
          humans: humansData,
        },
        done,
      );
  });

  it("Should send janes pets according to her specific condition.", done => {
    const jane = humansData.find(({ name }) => name === "jane");

    let pets = [];

    if (jane.age <= 30) {
      pets = petsData
        .filter(({ human }) => human === "jane")
        .map(({ name, type }) => ({
          name,
          type,
        }));
    }

    supertest(app)
      .get("/v1/humans/jane/pets")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect(
        {
          pets,
        },
        done,
      );
  });

  it("Should the identified human's pets.", done => {
    const pets = petsData
      .filter(({ human }) => human === "jack")
      .map(({ name, type }) => ({
        name,
        type,
      }));

    supertest(app)
      .get("/v1/humans/jack/pets")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect(
        {
          pets,
        },
        done,
      );
  });

  it("Should send a 404 response.", done => {
    supertest(app)
      .get("/v1/humans/12/pets")
      .expect("Content-Type", /json/)
      .expect(404)
      .expect(
        {
          message: "Human Not Found.",
        },
        done,
      );
  });
});
