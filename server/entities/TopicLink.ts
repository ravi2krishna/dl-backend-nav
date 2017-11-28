import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import { Topic } from "./Topic";
import { LinkType } from "./LinkType";

@Entity("topic_link")

export class TopicLink {
    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "name" })
    name: string;

    @Column({ name: "url" })
    url: string;


    @JoinColumn({ name: "type_link_id" })
    @ManyToOne(type => LinkType)
    linkType: LinkType;

    @JoinColumn({ name: "topic_id" })
    @ManyToOne(type => Topic)
    topic: Topic;

}
