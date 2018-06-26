import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Optionals} from "../entity/Optionals";

export class OptionalsController {

    private optionalsRepository = getRepository(Optionals);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.optionalsRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.optionalsRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.optionalsRepository.save(request.body);
    }

}