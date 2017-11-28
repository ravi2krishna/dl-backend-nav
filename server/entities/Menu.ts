import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import { Role } from "./Role";

import { Link } from "./Link";

@Entity("menu")
export class Menu {
    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "active" })
    active: boolean;

    @Column({ name: "updated_by" })
    updatedBy?: string;

    @Column({ name: "updated_date" })
    updatedDate?: Date;

    @JoinColumn({ name: "role_id" })
    @ManyToOne(type => Role)
    role: Role;

    @JoinColumn({ name: "link_id" })
    @ManyToOne(type => Link)
    link: Link;

}
