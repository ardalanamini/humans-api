/* global it */

const supertest = require("supertest");
const app = require("../../bootstrap");
const { name, version } = require("../../package.json");

it("Should send the API name and version", done => {
  supertest(app)
    .get("/")
    .expect("Content-Type", /json/)
    .expect(200)
    .expect({ name, version }, done);
});
