import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {OrderProduct} from "../entity/OrderProduct";

export class OrderProductController {

    private orderProductRepository = getRepository(OrderProduct);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.orderProductRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.orderProductRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.orderProductRepository.save(request.body);
    }

}