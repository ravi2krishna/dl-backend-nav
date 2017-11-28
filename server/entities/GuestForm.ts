import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import { User } from "./User";

import { Img } from "./Img";

@Entity("guest_form")
export class GuestForm { 
    @PrimaryColumn({name: "id"}) 
    id: string;

    @Column({name: "dob"}) 
    dob: Date;

    @Column({name: "qualification"}) 
    qualification: string;

    @Column({name: "profession"}) 
    profession: string;

    @Column({name: "updated_by"}) 
    updatedBy: string;

    @Column({name: "updated_date"}) 
    updatedDate: Date;
 
    @JoinColumn({name: "user_id"})
    @ManyToOne(type => User)
    user: User;

    @JoinColumn({name: "img_id"})
    @ManyToOne(type => Img)
    img: Img;

}

