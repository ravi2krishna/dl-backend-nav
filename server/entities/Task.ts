import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import { User } from "./User";

import { Topic } from "./Topic";

import { Batch } from "./Batch";

@Entity("task")
export class Task { 
    @PrimaryColumn({name: "id"}) 
    id: string;

    @Column({name: "assign_date"}) 
    assignDate?: Date;

    @Column({name: "txn_date"}) 
    txnDate?: Date;

    @Column({name: "pass_marks"}) 
    passMarks?: number;

    @Column({name: "marks"}) 
    marks?: number;

    @Column({name: "updated_by"}) 
    updatedBy?: string;

    @Column({name: "updated_date"}) 
    updatedDate?: Date;
 
    @JoinColumn({name: "user_profile_id"})
    @ManyToOne(type => User)
    userProfile: User;

    @JoinColumn({name: "topic_id"})
    @ManyToOne(type => Topic)
    topic: Topic;

    @JoinColumn({name: "batch_id"})
    @ManyToOne(type => Batch)
    batch: Batch;

}

