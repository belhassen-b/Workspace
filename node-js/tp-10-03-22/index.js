import express from 'express';
import {ClientService} from "./service/clientService.js";
import {ProductService} from "./service/productService.js";
import {OrderService} from "./service/orderService.js";


const api = express();
api.use(express.json());
let clientService = new ClientService();
let productService = new ProductService();
let orderService = new OrderService();


// ---------------------------------------------------------
// Clients
api.get('/clients' , (req , res) => {
    res.json(clientService.showAllClients());
});

api.get('/clients/:id' , (req , res) => {
    res.json(clientService.showClientById(req.params.id));
});

api.post('/clients' , (req , res) => {
    res.json(clientService.createClient(req.body));
});


api.delete('/clients/:id' , (req , res) => {
    res.json(clientService.deleteClient(req.params.id));
});

// ---------------------------------------------------------
// Products

api.get('/products' , (req , res) => {
    console.log("products");
    res.json(productService.showAllProducts());
});

api.get('/products/:id' , (req , res) => {
    res.json(productService.showProductById(req.params.id));
});
api.post('/products' , (req , res) => {
    res.json(productService.createProduct(req.body));
});
api.delete('/products/:id' , (req , res) => {
    console.log("delete" , req.params.id);
    res.json(productService.deleteProduct(req.params.id));
});

// ---------------------------------------------------------

// orders

api.get('/orders' , (req , res) => {
    res.json(orderService.showAllOrders());
});


api.get('/orders/:id' , (req , res) => {
        res.json(orderService.showOrderById(req.params.id));
    }
);

api.get('/orders/client/:id' , (req , res) => {
        res.json(orderService.showOrdersByClientId(req.params.id));
    }
);

api.post('/orders' , (req , res) => {
    res.json(orderService.addOrder(req.body));
});


// ---------------------------------------------------------
api.listen(3000 , () => {
    console.log('started')
});
