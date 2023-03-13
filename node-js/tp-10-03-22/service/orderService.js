import {read , write} from "../utils/utilsService.js";
import {ProductService} from "./productService.js";
import {Order} from "../models/Order.js";

export class OrderService {
    constructor() {
        this.file = "data/orders.json";
    }
    productService = new ProductService();

//show all orders
    showAllOrders() {
        return read(this.file);
    }

//show order by id
    showOrderById(id) {
        let orders = read(this.file);
        return orders.find(o => o.id == id);
    }

//show orders by client id
    showOrdersByClientId(id) {
        let orders = read(this.file);
        return orders.filter(o => o.clientId == id);
    }


//add order
    addOrder(order) {
        let orders = read(this.file);
        let newOrder = new Order(orders.length , order.clientId);
        order.products.forEach(p => {
                this.productService.removeStock(p.productId , p.quantity);
                newOrder.products.push(p);
            }
        );
        orders.push(newOrder);
        write(this.file , orders);
    }


//delete order by id
    deleteOrder(id) {
        let orders = read(this.file);
        let order = orders.find(o => o.id == id);
        orders.splice(orders.indexOf(order) , 1);
        write(this.file , orders);
        return order;
    }
}

