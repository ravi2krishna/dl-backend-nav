import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Batch } from "./Batch";
import { Status } from "./Status";
import { Topic } from "./Topic";

@Entity("batch_topic")

export class BatchTopic {

    @PrimaryColumn({ name: "id" })
    id?: string;

    @JoinColumn({ name: "batch_id" })
    @ManyToOne(type => Batch)
    batch: Batch;

    @JoinColumn({ name: "status_id" })
    @ManyToOne(type => Status)
    status: Status;

    @JoinColumn({ name: "topic_id" })
    @ManyToOne(type => Topic)
    topic: Topic;

}
