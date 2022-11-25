import { BeforeInsert, Column,  Entity, JoinColumn, OneToOne, PrimaryColumn }
from "typeorm";
import {hashSync, genSaltSync} from "bcrypt-nodejs"
import {v4 as uuid} from "uuid"
import { Account } from "../../account/entities/account.entity";

@Entity()
export class Users {

    @PrimaryColumn()
    id: string;

    @Column({nullable: false, unique: true})
    user_name: string;
 
    @Column({nullable: false, select: false})
    password: string;

    @JoinColumn()
    @OneToOne(type => Account, user => Users)
    account: Account;

    @BeforeInsert()
    hashPassword(){
        const salt = genSaltSync(10)
        this.password = hashSync(this.password, salt)
    } 

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}