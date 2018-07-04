import {UserController} from "./controller/UserController";
import { ProductController } from './controller/ProductController';
import { Restaurant } from './entity/Restaurant';
import { RestaurantController } from './controller/RestaurantController';
import { OrderProductController } from "./controller/OrderProductController";
import { OrderController } from './controller/OrderController';
import { Customer } from './entity/Customer';
import { CustomerController } from './controller/CustomerController';
import { EnterpriseController } from './controller/EnterpriseController';
import { OptionalsController } from './controller/OptionalController';

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
},{
    method: "get",
    route: "/products",
    controller: ProductController,
    action: "all"
}, {
    method: "get",
    route: "/produts/:id",
    controller: ProductController,
    action: "one"
},{
    method: "post",
    route: "/products",
    controller: ProductController,
    action: "save"
},{
    method: "get",
    route: "/restaurants",
    controller: RestaurantController,
    action: "all"
}, {
    method: "get",
    route: "/restaurant/:id",
    controller: RestaurantController,
    action: "one"
},{
    method: "post",
    route: "/restaurants",
    controller: RestaurantController,
    action: "save"
},{
    method: "get",
    route: "/orders",
    controller: OrderController,
    action: "all"
}, {
    method: "get",
    route: "/order/:id",
    controller: OrderController,
    action: "one"
},{
    method: "post",
    route: "/order",
    controller: OrderController,
    action: "save"
},{
    method: "get",
    route: "/orderProducts",
    controller: OrderProductController,
    action: "all"
}, {
    method: "get",
    route: "/orderProduct/:id",
    controller: OrderProductController,
    action: "one"
},{
    method: "post",
    route: "/orderProduct",
    controller: OrderProductController,
    action: "save"
},{
    method: "get",
    route: "/customers",
    controller: CustomerController,
    action: "all"
}, {
    method: "get",
    route: "/customer/:id",
    controller: CustomerController,
    action: "one"
},{
    method: "post",
    route: "/customer",
    controller: CustomerController,
    action: "save"
},{
    method: "get",
    route: "/enterprise",
    controller: EnterpriseController,
    action: "all"
}, {
    method: "get",
    route: "/enterprise/:id",
    controller: EnterpriseController,
    action: "one"
},{
    method: "post",
    route: "/enterprise",
    controller: EnterpriseController,
    action: "save"
},{
    method: "get",
    route: "/optional",
    controller: OptionalsController,
    action: "all"
}, {
    method: "get",
    route: "/optional/:id",
    controller: OptionalsController,
    action: "one"
},{
    method: "post",
    route: "/optional",
    controller: OptionalsController,
    action: "save"
}];