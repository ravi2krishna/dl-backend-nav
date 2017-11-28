import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import { Course } from "./Course";

@Entity("topic")
export class Topic { 
    @PrimaryColumn({name: "id"})
    id: string;

    @Column({name: "name"})
    name: string;

    @Column({name: "des"})
    des: string;

    @Column({name: "priority"})
    priority: number;

    @Column({name: "parent_topic_id"})
    parentTopic: string;

    @Column({name: "active"})
    active: boolean;

    @Column({name: "updated_by"})
    updatedBy: string;

    @Column({name: "updated_date"})
    updatedDate: Date;
 
    @JoinColumn({name: "course_id"})
    @ManyToOne(type => Course)
    course: Course;

}

