/**
 * Module de connexion à une base de données
 *
 * @module client
 */

const { Client } = require("pg");

/**
 * @constant {Object} Client - création d'un client pour se connecter à la BDD
 * @param {string} - Les informations de connexion (mot de passe, login, ...)
 */
const client = new Client(process.env.DB_URL);

// Je demande au client de se connecter
client.connect();

module.exports = client;