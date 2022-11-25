import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountService } from 'src/account/account.service';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    private readonly accountService: AccountService
  ) { }


  async create(createTransactionDto: CreateTransactionDto) {
    ~
    console.log(
      createTransactionDto
    )
    // Preciso verificar as contas existem
    const debitedAccount = await this.accountService.findOneByName(createTransactionDto.debitedAccount)
    const creditedAccount = await this.accountService.findOneByName(createTransactionDto.creditedAccount)
    console.log(debitedAccount, creditedAccount)
    if (!debitedAccount || !creditedAccount || createTransactionDto.debitedAccount === createTransactionDto.creditedAccount || Number(debitedAccount.balance) - Number(createTransactionDto.value) < 0) {
      throw new HttpException(
        "Something went wrong. Check transaction fields, value and receiver.",
        HttpStatus.BAD_REQUEST
      )
    }
    // Somar o valor na conta do cliente recebedor e subtrair no transferidor
    const updatedBallanceDebitedAccount = Number(debitedAccount.balance) - Number(createTransactionDto.value)
    await this.accountService.updateAccount(debitedAccount.id, { balance: updatedBallanceDebitedAccount.toString() })
    const updatedBallanceCreditedAccount = Number(creditedAccount.balance) + Number(createTransactionDto.value)
    await this.accountService.updateAccount(creditedAccount.id, { balance: updatedBallanceCreditedAccount.toString() })

    // retornar a transação
    const transaction = this.transactionRepository.create({
      ...createTransactionDto,
      debitedAccount: debitedAccount,
      creditedAccount: creditedAccount,
    })
    return this.transactionRepository.save(transaction)
  }

  async getTransaction() {
    return this.transactionRepository.find()
  }

}
