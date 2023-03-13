import express  from 'express';
import {ProductService} from "../service/productService.js";

let productService = new ProductService();

const productRoutes = express.Router();



// ---------------------------------------------------------
// Products
// Afficher tous les produits

productRoutes.get('/products' , (req , res) => {
    console.log("products");
    res.json(productService.showAllProducts());
});

// Afficher un produit par son id
productRoutes.get('/products/:id' , (req , res) => {
    res.json(productService.showProductById(req.params.id));
});
// Créer un produit
productRoutes.post('/products' , (req , res) => {
    res.json(productService.createProduct(req.body));
});

// Supprimer un produit par son id
productRoutes.delete('/products/:id' , (req , res) => {
    console.log("delete" , req.params.id);
    res.json(productService.deleteProduct(req.params.id));
});

export default productRoutes;