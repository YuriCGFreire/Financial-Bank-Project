import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Users } from './entities/user.entity';
import { AccountModule } from 'src/account/account.module';
 
@Module({
  imports: [TypeOrmModule.forFeature([Users]), AccountModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
