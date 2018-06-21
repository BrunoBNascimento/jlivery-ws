import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Product {
    
    @PrimaryColumn()
    product_id: number;

    @Column()
    name: string;

    @Column()
    price: string;

    @Column()
    restaurant_id: string;

    @Column()
    optional_id: number;

}
