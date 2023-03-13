import express  from "express";
import {ClientService} from "../service/clientService.js";




let clientService = new ClientService();
const clientRoutes = express.Router();



// Clients
// Afficher tous les clients
clientRoutes.get('/clients' , (req , res) => {
    res.json(clientService.showAllClients());
});

// Afficher un client par son id
clientRoutes.get('/clients/:id' , (req , res) => {
    res.json(clientService.showClientById(req.params.id));
});

// Créer un client
clientRoutes.post('/clients' , (req , res) => {
    res.json(clientService.createClient(req.body));
});

// Supprimer un client par son id
clientRoutes.delete('/clients/:id' , (req , res) => {
    res.json(clientService.deleteClient(req.params.id));
});

export default clientRoutes;