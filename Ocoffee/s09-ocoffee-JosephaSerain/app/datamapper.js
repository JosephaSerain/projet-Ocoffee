/**
 * Module qui va servir à centraliser toutes les requêtes
 * vers le serveur de base de données.
 *
 * @module dataMapper
 *
 * @requires module:client
 */

const client = require("../app/utils/client");

const dataMapper = {

    getAllCoffees: async () => {
        // La requête SQL
        const sql = "SELECT * FROM cafes";
        // On fait appelle à notre serveur de BDD en asynchrone
        const result = await client.query(sql);
        // On retourne les lignes du résultat
        return result.rows;
    },

    getOneCoffee: async (coffeeId) => {
        const sql = `SELECT * FROM cafes WHERE id = ${coffeeId}`;
        const result = await client.query(sql);
        return result.rows[0];
    },

    getLatestCoffees : async()=> {
        const sql = `SELECT *
        FROM cafes
        ORDER BY id DESC
        LIMIT 3;`
        const result = await client.query(sql);
        return result.rows;
    },

    getCoffeeBycategory: async (targetCategory) => {
        try {
          let sql = 'SELECT * FROM cafes';
          let values = [];
    
          if (targetCategory && targetCategory !== 'null') {
            sql += ' WHERE caracteristique_principale = $1';
            values.push(targetCategory);
          }
    
          console.log('SQL Query:', sql, 'Values:', values);
          const result = await client.query(sql, values);
          console.log('Query Result:', result.rows);
          return result.rows;
        } catch (error) {
          console.error('Erreur lors de la récupération des cartes par élément:', error);
          throw error; // Propager l'erreur pour qu'elle soit gérée par le contrôleur
        }
      },



};

module.exports = dataMapper;