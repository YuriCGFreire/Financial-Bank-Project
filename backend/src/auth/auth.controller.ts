import { Body,
  Controller,
  Post,
  Req,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @UseGuards(AuthGuard('local'))
  @Post('signin')
  async signIn(@Req() req: any){
    return this.authService.signIn(req.user)
  }

  @Post('signup')
  async signUp(@Body() body: CreateUserDto){
    return this.authService.signUp(body)
  }
}
