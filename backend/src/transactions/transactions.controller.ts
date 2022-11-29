import { Controller, Post, Body, Get, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport'
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
@UseGuards(AuthGuard('jwt'))
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
