import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

@Entity("link")
export class Link { 
    @PrimaryColumn({name: "id"})
    id: string;

    @Column({name: "name"})
    name: string;

    @Column({name: "url"})
    url: string;

    @Column({name: "icon"})
    icon: string;

    @Column({name: "priority"})
    priority: number;
 
}

