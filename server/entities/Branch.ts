import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import { Address } from "./Address";

@Entity("branch")
export class Branch { 
    @PrimaryColumn({name: "id"})
    id: string;

    @Column({name: "name"})
    name: string;

    @Column({name: "title"})
    title: string;

    @Column({name: "email"})
    email: string;

    @Column({name: "mobile"})
    mobile: string;

    @Column({name: "phone"})
    phone: string;

    @Column({name: "xCord"})
    xCord: string;

    @Column({name: "yCord"})
    yCord: string;

    @Column({name: "active"})
    active: boolean;

    @Column({name: "updated_by"})
    updatedBy: string;

    @Column({name: "updated_date"})
    updatedDate: Date;
 
    @JoinColumn({name: "address_id"})
    @ManyToOne(type => Address)
    address: Address;

}

