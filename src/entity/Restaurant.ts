import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Restaurant {

    @PrimaryColumn()
    restaurant_id: number;

    @Column()
    name: string;

    @Column()
    CNPJ: string;

    @Column()
    email: string;
    
    @Column()
    password: string;

    @Column()
    segment: string;
}
