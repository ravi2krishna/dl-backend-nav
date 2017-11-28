import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

@Entity("timing")
export class Timing { 
    @PrimaryColumn({name: "id"})
    id: string;

    @Column({name: "name"})
    name: string;

    @Column({name: "code"})
    code: string;
 
}

