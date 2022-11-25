import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateAccountDTO } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>
  ){}

  async create(user_id: string) {
    const account = this.accountRepository.create({
      balance: '100',
      user: {
        id: user_id
      }
    })
    return this.accountRepository.save(account)
  }

  findOneByName(user_name: string){
    return this.accountRepository.findOne({
      where: {user: {user_name: user_name}},
      relations: {
        user: true
      }
    })
  }

  findAll(){
    return this.accountRepository.find({relations: {user: true}})
  }

  async updateAccount(accountId: string, updateAccountDTO: UpdateAccountDTO){
    const account = await this.accountRepository.findOneOrFail({
      where: {id: accountId}
    })
    this.accountRepository.merge(account, updateAccountDTO)
    return await this.accountRepository.save(account)
  }
}
