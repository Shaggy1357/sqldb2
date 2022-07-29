import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRespository:Repository<User>){}

    findAll():Promise<User[]>{
        const response = this.usersRespository.find();
        return response;
    }

    findOne(id:number):Promise<User>{
        return this.usersRespository.findOneBy({id});
    }

    async remove(id:number):Promise<void>{
        await this.usersRespository.delete(id);
    }

    async create(user:User):Promise<User>{
        return this.usersRespository.save(user);
    }

    async update(id:number, user:User): Promise<void>{
        await this.usersRespository.update(id,user);
    }
}
