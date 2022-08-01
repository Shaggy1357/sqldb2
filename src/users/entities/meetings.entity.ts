import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()

export class Meetings{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    zoomUrl:string;

    @ManyToMany(()=> User, user=>user.meetings)
    attendees:User[];
}