import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import { Branch } from "./Branch";

import { User } from "./User";

@Entity("sales")
export class Sales { 
    @PrimaryColumn({name: "id"}) 
    id: string;

    @Column({name: "invoice_date"}) 
    invoiceDate: Date;

    @Column({name: "invoice_no"}) 
    invoiceNo: string;

    @Column({name: "reference_no"}) 
    referenceNo: string;

    @Column({name: "des"}) 
    des: string;

    @Column({name: "is_igst"}) 
    isIgst: boolean;

    @Column({name: "sub_total"}) 
    subTotal: number;

    @Column({name: "discount_value"}) 
    discountValue: number;

    @Column({name: "tax_amount"}) 
    taxAmount: number;

    @Column({name: "total_amount"}) 
    totalAmount: number;

    @Column({name: "updated_by"}) 
    updatedBy: string;

    @Column({name: "updated_date"}) 
    updatedDate: Date;
 
    @JoinColumn({name: "branch_id"})
    @ManyToOne(type => Branch)
    branch: Branch;

    @JoinColumn({name: "user_id"})
    @ManyToOne(type => User)
    user: User;

}

