import { Controller, Post, Body, Get} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async create(@Body() body: CreateTransactionDto) {
    return this.transactionsService.create(body);
  }

  @Get()
  async find(){
    return this.transactionsService.getTransaction()
  }
}
