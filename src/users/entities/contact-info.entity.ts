import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()

export class ContactInfo{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:true})
    phone:string;

    @Column()
    email:string;

    @OneToOne(() => User, user => user.contactInfo, {onDelete:"CASCADE"})
    user:User;
}