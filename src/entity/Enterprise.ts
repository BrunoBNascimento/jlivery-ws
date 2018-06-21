import {Entity, PrimaryColumn, Column} from "typeorm";
import { UrlWithStringQuery } from "url";

@Entity()
export class Enterprise {

    @PrimaryColumn()
    enterprise_id: number;

    @Column()
    name: string;

    @Column()
    CNPJ: string;

    @Column()
    lat: string;

    @Column()
    lng: string;

    @Column()
    address: string;

    @Column()
    number: number;

    @Column()
    district: string;

    @Column()
    aditional: string;

}
