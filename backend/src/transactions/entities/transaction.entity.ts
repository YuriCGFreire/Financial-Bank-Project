import { type } from "os";
import { Account } from "src/account/entities/account.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity()
export class Transaction {

    @PrimaryColumn()
    id: string;

    @ManyToOne(type => Account, transactionsDebited => Transaction, {eager: true})
    debitedAccount: Account;

    @ManyToOne(type => Account, transactionsCredited => Transaction, {eager: true})
    creditedAccount: Account;

    @Column()
    value: string;

    @CreateDateColumn()
    createdAt: Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}
