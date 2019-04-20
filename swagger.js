const pkg = require("./package.json");

module.exports = {
  openapi: "3.0.0",
  info: {
    title: pkg.name,
    version: pkg.version,
    description: pkg.description,
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  host: "localhost:3000",
  basePath: "",
  schemas: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
};
