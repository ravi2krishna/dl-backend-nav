import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Batch } from "./Batch";

@Entity("batch_timing")
export class BatchTiming {
    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "from_time" })
    fromTime?: Date;

    @Column({ name: "to_time" })
    toTime?: Date;

    @Column({ name: "mins" })
    mins?: number;

    @Column({ name: "updated_by" })
    updatedBy?: string;

    @Column({ name: "updated_date" })
    updatedDate?: Date;

    @JoinColumn({ name: "batch_id" })
    @ManyToOne(type => Batch)
    batch: Batch;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(type => User)
    user: User;

}
