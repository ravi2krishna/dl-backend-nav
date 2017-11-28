import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import { CourseDetails } from "./CourseDetails";

@Entity("course_installment")
export class CourseInstallment { 
    @PrimaryColumn({name: "id"}) 
    id: string;

    @Column({name: "amount"}) 
    amount: number;

    @Column({name: "due_date"}) 
    dueDate: Date;

    @Column({name: "txn_date"}) 
    txnDate: Date;

    @Column({name: "is_done"}) 
    isDone: boolean;

    @Column({name: "des"}) 
    des: string;
 
    @JoinColumn({name: "course_details_id"})
    @ManyToOne(type => CourseDetails)
    courseDetails: CourseDetails;

}

