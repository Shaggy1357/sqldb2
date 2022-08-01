import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { ContactInfo } from './users/entities/contact-info.entity';
import { Meetings } from './users/entities/meetings.entity';
import { Tasks } from './users/entities/tasks.entity';
import { Managers } from './users/entities/managers.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Creole@123',
      database: 'sqldb1',
      entities: [User,ContactInfo,Meetings,Tasks,Managers],
      synchronize: true,
    }),
  UsersModule],
})
export class AppModule {}
