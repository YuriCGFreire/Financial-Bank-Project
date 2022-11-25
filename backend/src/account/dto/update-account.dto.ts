import {IsNotEmpty} from 'class-validator'

export class UpdateAccountDTO {

    @IsNotEmpty()
    balance: string;
    
}