import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

@Entity("img")
export class Img { 
    @PrimaryColumn({name: "id"})
    id: string;

    @Column({name: "src"})
    src: number;
 
}

