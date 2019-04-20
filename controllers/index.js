const { name, version } = require("../package.json");

/**
 * @swagger
 *
 *  definitions:
 *    Details:
 *      type: object
 *      required:
 *        - name
 *        - version
 *      properties:
 *        name:
 *          type: string
 *          example: "humans-api"
 *        version:
 *          type: string
 *          example: "1.0.0"
 */

/**
 * @swagger
 *
 *  /:
 *    get:
 *      description: Get API information
 *      produces:
 *       - application/json
 *      responses:
 *        200:
 *          description: details
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/definitions/Details"
 */
exports.details = (req, res) => res.json({ name, version });

exports.humans = require("./humans");
