const dataMapper = require("../datamapper");

const coffeeController = {
    showAllCoffees: async (req, res) => {
        try {
          // On appelle la méthode du dataMapper approprié
          const coffees = await dataMapper.getAllCoffees();
          res.status(200).render("catalogue", { coffees });
        } catch (error) {
          res.status(500).send(`Erreur côté serveur: ${error}`);
        }
    },

    showCoffee: async (req, res) => {
        const targetId = Number(req.params.id); 
        try {
        
          const coffee = await dataMapper.getOneCoffee(targetId);
          if (!coffee) {
            return res.status(404).render("error-404");
          }
          res.status(200).render("produit", { coffee });
        } catch (error) {
          res.status(500).send(`Erreur côté serveur: ${error}`);
        }
    },

    showLatestCoffees : async (req, res) => {
        try {
            
            const coffees = await dataMapper.getLatestCoffees();
            res.status(200).render("accueil", { coffees });
          } catch (error) {
            res.status(500).send(`Erreur côté serveur: ${error}`);
          }

    },

    searchByCategory: async (req, res) => {
      try {
        const caracteristique_principale = req.query.caracteristique_principale;
        console.log('Searching for category:', caracteristique_principale);
        const coffees = await dataMapper.getCoffeeBycategory(caracteristique_principale);
        console.log('Categories found:', caracteristique_principale);
        res.render('catalogue', { coffees, searchcaracteristique_principale: caracteristique_principale });
      } catch (error) {
        console.error('Erreur lors de la recherche des cafés:', error);
        res.status(500).send('Erreur serveur');
      }
    },

};

module.exports = coffeeController;