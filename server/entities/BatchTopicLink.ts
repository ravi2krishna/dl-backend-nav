import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";

import { BatchTopic } from "./BatchTopic";
import { LinkType } from "./LinkType";

@Entity("batch_topic_link")

export class BatchTopicLink {
    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "name" })
    name: string;

    @Column({ name: "url" })
    url: string;


    @JoinColumn({ name: "type_link_id" })
    @ManyToOne(type => LinkType)
    linkType: LinkType;

    @JoinColumn({ name: "batch_topic_id" })
    @ManyToOne(type => BatchTopic)
    batchTopic: BatchTopic;

}
