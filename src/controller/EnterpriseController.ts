import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Enterprise} from "../entity/Enterprise";

export class EnterpriseController {

    private enterpriseRepository = getRepository(Enterprise);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.enterpriseRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const { id } = request.params
        return this.enterpriseRepository.findOne(id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { body } = request
        return this.enterpriseRepository.save(body);
    }

}