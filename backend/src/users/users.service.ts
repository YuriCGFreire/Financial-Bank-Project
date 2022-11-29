import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountService } from 'src/account/account.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
        private readonly accountService: AccountService,
    ){}

    async createUserAndAccount(createUserDTO: CreateUserDto){
        try{
            const user = this.usersRepository.create(createUserDTO)
            await this.usersRepository.save(user)
            return this.accountService.create(user.id)
        }catch(err){ 
            throw new HttpException(
                "User already exists.",
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async findOneByUserNameForValidate(user_name: string){
        const user = await this.usersRepository.findOneOrFail({
            where: {user_name: user_name},
            select: ["id", "user_name", 'password']
        })
        return user
    }

    async findOneByUserName(user_name:string){
        return this.accountService.findOneByName(user_name)
    }

    async findAll(){
        return this.accountService.findAll()
    }
}
