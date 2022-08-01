import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
    constructor(@Inject(UsersService) private userService:UsersService){}

    @Get()
    findAll():Promise<User[]>{
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id')id:number):Promise<User>{
        return this.userService.findOne(id);
    }

    @Post()
    async createUser(@Body() createUserDto:User){
        const response = await this.userService.createUser(createUserDto);
        return response;
    }

    @Put(':id')
    async update(@Param('id')id:number,@Body()createUserDto:User){
        const response = this.userService.update(id,createUserDto);
        return response;
    }

    @Delete(':id')
    async delete(@Param('id')id:number){
        const response = await this.userService.remove(id);
        return response;
    }
}
