import {read , write} from "../utils/utilsService.js";
import {ProductService} from "./productService.js";
import {Order} from "../models/Order.js";
export class OrderService {
     file = "data/orders.json";
productService= new ProductService();
showAllOrders() {
    return read(this.file);
}
showOrderById(id) {
    let orders = read(this.file);
    return orders.find(o => o.id == id);
}
showOrdersByClientId(id) {
    let orders = read(this.file);
    return orders.filter(o => o.clientId == id);
}

addOrder(order) {
    let orders = read(this.file);
    let newOrder = new Order(orders.length , order.clientId);
    order.products.forEach(p => {
        this.productService.removeStock(p.productId , p.quantity);
        newOrder.products.push(p);
    }
    );
    orders.push(newOrder);
    write(this.file, orders);
}
}

