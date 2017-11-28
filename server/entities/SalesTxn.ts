import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import { Sales } from "./Sales";

import { Product } from "./Product";

@Entity("sales_txn")
export class SalesTxn { 
    @PrimaryColumn({name: "id"}) 
    id: string;

    @Column({name: "quantity"}) 
    quantity: number;

    @Column({name: "unit_price"}) 
    unitPrice: number;

    @Column({name: "discount"}) 
    discount: number;

    @Column({name: "discount_value"}) 
    discountValue: number;

    @Column({name: "cgst"}) 
    cgst: number;

    @Column({name: "sgst"}) 
    sgst: number;

    @Column({name: "igst"}) 
    igst: number;

    @Column({name: "net_amount"}) 
    netAmount: number;

    @Column({name: "tax_amount"}) 
    taxAmount: number;

    @Column({name: "amount"}) 
    amount: number;
 
    @JoinColumn({name: "sales_id"})
    @ManyToOne(type => Sales)
    sales: Sales;

    @JoinColumn({name: "product_id"})
    @ManyToOne(type => Product)
    product: Product;

}

