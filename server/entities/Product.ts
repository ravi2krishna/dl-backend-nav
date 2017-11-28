import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

@Entity("product")
export class Product { 
    @PrimaryColumn({name: "id"}) 
    id: string;

    @Column({name: "name"}) 
    name: string;

    @Column({name: "description"}) 
    description: string;

    @Column({name: "hsn_code"}) 
    hsnCode: string;

    @Column({name: "cgst"}) 
    cgst: number;

    @Column({name: "sgst"}) 
    sgst: number;

    @Column({name: "igst"}) 
    igst: number;

    @Column({name: "buying_price"}) 
    buyingPrice: number;

    @Column({name: "unit_price"}) 
    unitPrice: number;

    @Column({name: "updated_by"}) 
    updatedBy: string;

    @Column({name: "updated_date"}) 
    updatedDate: Date;
 
}

