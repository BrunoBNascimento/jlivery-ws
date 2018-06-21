import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Customer} from "../entity/Customer";

export class CustomerController {

    private userRepository = getRepository(Customer);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

}