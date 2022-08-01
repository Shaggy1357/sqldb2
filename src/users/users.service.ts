import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactInfo } from './entities/contact-info.entity';
import { Meetings } from './entities/meetings.entity';
import { Tasks } from './entities/tasks.entity';
import { Managers } from './entities/managers.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRespository:Repository<User>,
    @InjectRepository(ContactInfo) private contactInfoRepo:Repository<ContactInfo>,
    @InjectRepository(Meetings) private meetingsRepo:Repository<Meetings>,
    @InjectRepository(Tasks) private tasksRepo:Repository<Tasks>,
    @InjectRepository(Managers) private managersRepo:Repository<Managers>){}

    findAll():Promise<User[]>{
        const response = this.usersRespository.find({relations:['contactInfo','manager','tasks']});
        return response;
    }

    findOne(id:number):Promise<User>{
        return this.usersRespository.findOneBy({id});
    }

    async remove(id:number):Promise<void>{
        await this.usersRespository.delete(id);
    }

    async createUser(user:User):Promise<User>{
        // console.log('Created')
        // console.log('User',user)
        return this.usersRespository.save(user);
    }

    // async createManager(manager:User):Promise<User>{
    //     const response = await this.managersRepo.save(manager);
    //     return response;
    // }

    async update(id:number, user:User): Promise<void>{
        // console.log('Update')
        await this.usersRespository.update(id,user);
    }
}
