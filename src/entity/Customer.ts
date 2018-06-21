import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Customer {

    @PrimaryColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
