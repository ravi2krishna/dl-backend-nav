import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import { Role } from "./Role";

import { Address } from "./Address";

import { Branch } from "./Branch";

@Entity("user")
export class User {
    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "name" })
    name: string;

    @Column({ name: "email" })
    email: string;

    @Column({ name: "mobile" })
    mobile: string;

    @Column({ name: "password" })
    password: string;

    @Column({ name: "active" })
    active: boolean;

    @Column({ name: "updated_by" })
    updatedBy: string;

    @Column({ name: "updated_date" })
    updatedDate: Date;

    @JoinColumn({ name: "role_id" })
    @ManyToOne(type => Role)
    role: Role;

    @JoinColumn({ name: "address_id" })
    @ManyToOne(type => Address)
    address: Address;

    @JoinColumn({ name: "branch_id" })
    @ManyToOne(type => Branch)
    branch: Branch;

}
