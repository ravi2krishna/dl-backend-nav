import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import { GuestForm } from "./GuestForm";

@Entity("course_details")
export class CourseDetails { 
    @PrimaryColumn({name: "id"}) 
    id: string;

    @Column({name: "course_opted"}) 
    courseOpted: string;

    @Column({name: "program_name"}) 
    programName: string;

    @Column({name: "type_of_course"}) 
    typeOfCourse: string;

    @Column({name: "duration"}) 
    duration: number;

    @Column({name: "start_date"}) 
    startDate: Date;

    @Column({name: "end_date"}) 
    endDate: Date;

    @Column({name: "offered_fee"}) 
    offeredFee: number;

    @Column({name: "signup_fee"}) 
    signupFee: number;

    @Column({name: "special_needs"}) 
    specialNeeds: string;

    @Column({name: "mode_of_payment"}) 
    modeOfPayment: string;
 
    @JoinColumn({name: "guest_form_id"})
    @ManyToOne(type => GuestForm)
    guestForm: GuestForm;

}

