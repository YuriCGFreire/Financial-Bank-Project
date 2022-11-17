import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
import { Users } from "./user.entity";

@Entity()
export class Account {

    @PrimaryColumn()
    id: string;

    @Column({type: "money", default: 100})
    balance: number;

    @OneToOne(type => Users, account => Account)
    @JoinColumn()
    user: Users;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}