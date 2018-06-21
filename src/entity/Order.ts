import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Order {

    @PrimaryColumn()
    order_id: number;

    @Column()
    customer_id: string;

    @Column()
    restaurant_id: string;

}
