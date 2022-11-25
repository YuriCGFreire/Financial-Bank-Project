import { IsNotEmpty} from "class-validator";

export class CreateTransactionDto {

    @IsNotEmpty()
    debitedAccount: string;

    @IsNotEmpty()
    creditedAccount: string;

    @IsNotEmpty()
    value: string;
}
