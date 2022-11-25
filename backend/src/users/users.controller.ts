import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('users')
// @UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/:name')
  findOneByUserName(@Param('name') name){
    return this.usersService.findOneByUserName(name)
  }

  @Get()
  findAll(){
    return this.usersService.findAll()
  }
}
