// index.js

const express = require('express');
const cors = require('cors');
const Product = require('./models/product');
const sequelize = require('./config/database.config');

const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());

app.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des produits' });
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('Connexion à la base de données réussie.');
        app.listen(PORT, () => {
            console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Impossible de se connecter à la base de données:', err);
    });
