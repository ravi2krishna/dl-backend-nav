import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import { User } from "./User";

import { Batch } from "./Batch";

@Entity("batch_user")
export class BatchUser {
    @PrimaryColumn({ name: "id" })
    id: string;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(type => User)
    user: User;

    @JoinColumn({ name: "batch_id" })
    @ManyToOne(type => Batch)
    batch: Batch;

}
