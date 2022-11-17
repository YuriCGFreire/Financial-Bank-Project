import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authService: AuthService){
        super({usernameField: 'user_name'})
    }

    async validate(user_name: string, password: string){
        const user = await this.authService.validateUser(user_name, password)
 
        if(!user) throw new UnauthorizedException(
            'Invalid password and/or user name.'
        )

        return user
    }
}