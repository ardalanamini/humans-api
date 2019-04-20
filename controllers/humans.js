const humansData = require("../data/humans.json");
const petsData = require("../data/pets.json");

/**
 * If the given human identifier results to a known human
 * Replace the "human" parameter with the identified human,
 * Otherwise send a "404 Not Found" response
 */
exports.param = (req, res, next, name) => {
  const human = humansData.find(data => data.name === name);

  if (!human) {
    return res.status(404).json({ message: "Human Not Found." });
  }

  req.params.human = human;

  return next();
};

/**
 * @swagger
 *
 *  tags:
 *    - name: Human
 *      description: Human Manipulation
 *    - name: Pet
 *      description: Pet Manipulation
 */

/**
 * @swagger
 *
 *  definitions:
 *    Human:
 *      type: object
 *      required:
 *        - name
 *        - age
 *      properties:
 *        name:
 *          type: string
 *          example: "jack"
 *        version:
 *          type: number
 *          example: 22
 *    Pet:
 *      type: object
 *      required:
 *        - name
 *        - type
 *      properties:
 *        name:
 *          type: string
 *          example: "lucifer"
 *        type:
 *          type: string
 *          example: "cat"
 */

/**
 * @swagger
 *
 *  /v1/humans:
 *    get:
 *      tags:
 *        - Human
 *      description: Get all humans
 *      produces:
 *       - application/json
 *      responses:
 *        200:
 *          description: humans
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                required:
 *                  - humans
 *                properties:
 *                  humans:
 *                    type: array
 *                    items:
 *                      $ref: "#/definitions/Human"
 */
exports.index = (req, res) => res.json({ humans: humansData });

/**
 * @swagger
 *
 *  /v1/humans/{human}/pets:
 *    get:
 *      tags:
 *        - Human
 *        - Pet
 *      description: Get all the pets owned by the "human" parameter
 *      produces:
 *       - application/json
 *      responses:
 *        200:
 *          description: pets
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                required:
 *                  - pets
 *                properties:
 *                  pets:
 *                    type: array
 *                    items:
 *                      $ref: "#/definitions/Pet"
 *        404:
 *          description: Human not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                required:
 *                  - message
 *                properties:
 *                  message:
 *                    type: string
 *                    example: "Human Not Found."
 */
exports.indexPets = (req, res) => {
  const { name, age } = req.params.human;

  // IMPORTANT: This condition should not be changed/removed without consultation.
  if (name === "jane" && age > 30) {
    return res.json({ pets: [] });
  }

  const pets = petsData
    .filter(pet => pet.human === name)
    .map(pet => ({ name: pet.name, type: pet.type }));

  return res.json({ pets });
};
