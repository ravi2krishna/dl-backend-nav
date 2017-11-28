import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import { MCQ } from "./MCQ";

import { Task } from "./Task";

@Entity("task_mcq")
export class TaskMcq { 
    @PrimaryColumn({name: "id"}) 
    id?: string;

    @Column({name: "is_right_ans"}) 
    isRightAns?: boolean;

    @Column({name: "your_ans"}) 
    yourAns?: string;

    @Column({name: "updated_by"}) 
    updatedBy?: string;

    @Column({name: "updated_date"}) 
    updatedDate?: Date;
 
    @JoinColumn({name: "mcq_id"})
    @ManyToOne(type => MCQ)
    mcq: MCQ;

    @JoinColumn({name: "task_id"})
    @ManyToOne(type => Task)
    task: Task;

}

