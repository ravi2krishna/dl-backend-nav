import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";

import { BatchType } from "./BatchType";

import { Course } from "./Course";

import { Branch } from "./Branch";

@Entity("batch")
export class Batch {
    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "name" })
    name: string;

    @Column({ name: "from_date" })
    fromDate: Date;

    @Column({ name: "to_date" })
    toDate: Date;

    @Column({ name: "from_time" })
    fromTime: string;

    @Column({ name: "to_time" })
    toTime: string;

    @Column({ name: "des" })
    des: string;

    @Column({ name: "active" })
    active: boolean;

    @Column({ name: "updated_by" })
    updatedBy: string;

    @Column({ name: "updated_date" })
    updatedDate: Date;

    @JoinColumn({ name: "type_batch_id" })
    @ManyToOne(type => BatchType)
    batchType: BatchType;

    @JoinColumn({ name: "course_id" })
    @ManyToOne(type => Course)
    course: Course;

    @JoinColumn({ name: "branch_id" })
    @ManyToOne(type => Branch)
    branch: Branch;

}
