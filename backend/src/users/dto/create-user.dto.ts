import { IsNotEmpty, Matches, MinLength} from "class-validator";

export class CreateUserDto {
  
    @IsNotEmpty()
    user_name: string;

    @IsNotEmpty()
    @MinLength(8)
    @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, {
        message: "A senha deve conter ao menos uma letra maiúscula, um caractere especial ef números."
    })
    password: string;

}