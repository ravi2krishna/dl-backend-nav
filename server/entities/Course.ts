import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import { Img } from "./Img";

@Entity("course")
export class Course { 
    @PrimaryColumn({name: "id"})
    id: string;

    @Column({name: "name"})
    name: string;

    @Column({name: "des"})
    des: string;

    @Column({name: "active"})
    active: boolean;

    @Column({name: "updated_by"})
    updatedBy: string;

    @Column({name: "updated_date"})
    updatedDate: Date;
 
    @JoinColumn({name: "img_id"})
    @ManyToOne(type => Img)
    img: Img;

}

