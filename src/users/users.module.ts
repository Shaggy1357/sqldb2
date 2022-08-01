import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Tasks } from './entities/tasks.entity';
import { Meetings } from './entities/meetings.entity';
import { ContactInfo } from './entities/contact-info.entity';
import { Managers } from './entities/managers.entity';
@Module({
  imports:[TypeOrmModule.forFeature([User,Tasks,Meetings,ContactInfo,Managers])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
