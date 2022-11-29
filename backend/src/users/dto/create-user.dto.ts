import { IsNotEmpty, Matches, MinLength} from "class-validator";

export class CreateUserDto {
  
    @IsNotEmpty()
    user_name: string;

    @IsNotEmpty()
    @MinLength(8)
    @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, {
        message: "Password must contain atleast one uppercase letter, one especial character and numbers"
    })
    password: string;

}