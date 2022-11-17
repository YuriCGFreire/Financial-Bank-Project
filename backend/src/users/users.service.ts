import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Account } from './entities/account.entity';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
        @InjectRepository(Account)
        private readonly accountsRepository: Repository<Account>
    ){}

    async createUserAndAccount(createUserDTO: CreateUserDto){
        try{
            const user = this.usersRepository.create(createUserDTO)
            const account = this.accountsRepository.create({
                balance: 100,
                user: {
                    id: user.id
                }
            })
            await this.usersRepository.save(user)
            return await this.accountsRepository.save(account)
        }catch(err){ 
            throw new HttpException(
                "User already existis.",
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async findOneByUserNameForValidate(user_name: string){
        const user = await this.usersRepository.findOneOrFail({
            where: {user_name: user_name},
            select: ['password']
        })
        return user
    }

    async findOneByUserName(user_name:string){
        return await this.accountsRepository.findOneOrFail({
            where: {user: {user_name: user_name}},
            relations: ['user']
        })
    }
}
