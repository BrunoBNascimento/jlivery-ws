import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Optionals {

    @PrimaryColumn()
    optional_id: number;

    @Column()
    name: string;

    @Column()
    price: string;

    @Column()
    next_optional_id: string;

}
