import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactInfo } from "./contact-info.entity";
import { Meetings } from "./meetings.entity";
import { Tasks } from "./tasks.entity";
import { Managers } from "./managers.entity";
@Entity()

export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName:string;

    @Column()
    lastName:string;

    @Column({default:true})
    isActive:boolean;

    @ManyToOne(() => Managers, manager=>manager.user,{cascade:true,onDelete:'SET NULL'})
     @JoinColumn()
    manager:Managers;

    @OneToOne(() => ContactInfo, contactInfo => contactInfo.user, {cascade:true})
    @JoinColumn()
    contactInfo: ContactInfo;

    @ManyToOne(() => Tasks, tasks=>tasks.user,{cascade:true})
    tasks:Tasks[];

    @ManyToMany(()=>Meetings,(meetings)=>meetings.attendees)
    @JoinColumn()
    meetings:Meetings;
}