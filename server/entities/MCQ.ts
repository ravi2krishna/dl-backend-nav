import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";

import { Topic } from "./Topic";

@Entity("mcq")

export class MCQ {

    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "des" })
    des: string;

    @Column({ name: "question" })
    question: string;

    @Column({ name: "is_multi_ans" })
    isMultiAns: boolean;

    @Column({ name: "option_a" })
    optionA: string;

    @Column({ name: "check_a" })
    checkA: boolean;

    @Column({ name: "option_b" })
    optionB: string;

    @Column({ name: "check_b" })
    checkB: boolean;

    @Column({ name: "option_c" })
    optionC: string;

    @Column({ name: "check_c" })
    checkC: boolean;

    @Column({ name: "option_d" })
    optionD: string;

    @Column({ name: "check_d" })
    checkD: boolean;

    @Column({ name: "active" })
    active: boolean;

    @Column({ name: "updated_by" })
    updatedBy: string;

    @Column({ name: "updated_date" })
    updatedDate: Date;

    @JoinColumn({ name: "topic_id" })
    @ManyToOne(type => Topic)
    topic: Topic;

}
