import express from 'express';
import {ClientService} from "./service/clientService.js";
import {ProductService} from "./service/productService.js";
import {OrderService} from "./service/orderService.js";


// Déclaration de l'API
const api = express();
// Configuration du middleware
api.use(express.json());
// Configuration des services
let clientService = new ClientService();
let productService = new ProductService();
let orderService = new OrderService();

// ---------------------------------------------------------
// Clients
// Afficher tous les clients
api.get('/clients' , (req , res) => {
    res.json(clientService.showAllClients());
});

// Afficher un client par son id
api.get('/clients/:id' , (req , res) => {
    res.json(clientService.showClientById(req.params.id));
});

// Créer un client
api.post('/clients' , (req , res) => {
    res.json(clientService.createClient(req.body));
});

// Supprimer un client par son id
api.delete('/clients/:id' , (req , res) => {
    res.json(clientService.deleteClient(req.params.id));
});

// ---------------------------------------------------------
// Products
// Afficher tous les produits

api.get('/products' , (req , res) => {
    console.log("products");
    res.json(productService.showAllProducts());
});

// Afficher un produit par son id
api.get('/products/:id' , (req , res) => {
    res.json(productService.showProductById(req.params.id));
});
// Créer un produit
api.post('/products' , (req , res) => {
    res.json(productService.createProduct(req.body));
});

// Supprimer un produit par son id
api.delete('/products/:id' , (req , res) => {
    console.log("delete" , req.params.id);
    res.json(productService.deleteProduct(req.params.id));
});

// ---------------------------------------------------------

// orders
// Afficher toutes les commandes

api.get('/orders' , (req , res) => {
    res.json(orderService.showAllOrders());
});

// Afficher une commande par son id
api.get('/orders/:id' , (req , res) => {
        res.json(orderService.showOrderById(req.params.id));
    }
);

// Afficher les commandes d'un client par son id
api.get('/orders/client/:id' , (req , res) => {
        res.json(orderService.showOrdersByClientId(req.params.id));
    }
);

// Créer une commande
api.post('/orders' , (req , res) => {
    res.json(orderService.addOrder(req.body));
});


// Supprimer une commande par son id
api.delete('/orders/:id' , (req , res) => {
    res.json(orderService.deleteOrder(req.params.id));
});

// ---------------------------------------------------------//
// Lancement du serveur
api.listen(3000 , () => {
    console.log('started')
});
