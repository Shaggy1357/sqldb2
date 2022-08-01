import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()

export class Managers{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName:string;

    @Column()
    lastName:string;

    @Column({default:true})
    isActive:boolean;
    
    @OneToMany(() => User, user=>user.manager,{onDelete:'SET NULL'})
    user:User[]; 
}