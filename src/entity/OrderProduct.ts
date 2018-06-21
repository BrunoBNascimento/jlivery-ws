import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class OrderProduct {

    @PrimaryColumn()
    product_id: number;

    @Column()
    order_id: string;

    @Column()
    product_amount: string;

}
