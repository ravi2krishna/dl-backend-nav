import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

@Entity("type_link")

export class LinkType {
    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "name" })
    name: string;

    @Column({ name: "code" })
    code: string;

}
