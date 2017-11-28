import {Entity, Column, PrimaryGeneratedColumn, PrimaryColumn} from "typeorm";

@Entity()
export class AppData {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

}