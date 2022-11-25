import { Transaction } from "src/transactions/entities/transaction.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
import { Users } from "../../users/entities/user.entity";

@Entity()
export class Account {

    @PrimaryColumn()
    id: string;

    @Column({default: '100'})
    balance: string;

    @JoinColumn()
    @OneToOne(type => Users, account => Account)
    user: Users;

    @OneToMany(type => Transaction, debitedAccount => Account)
    transactionsDebited: Transaction[];

    @OneToMany(type => Transaction, creditedAccount => Account)
    transactionsCredited: Transaction[];

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}