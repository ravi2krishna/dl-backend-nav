import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

@Entity("master_data")
export class MasterData { 
    @PrimaryColumn({name: "id"}) 
    id: string;

    @Column({name: "code"}) 
    code: string;

    @Column({name: "name"}) 
    name: string;

    @Column({name: "active"}) 
    active: boolean;

    @Column({name: "updated_by"}) 
    updatedBy: string;

    @Column({name: "updated_date"}) 
    updatedDate: Date;
 
}

