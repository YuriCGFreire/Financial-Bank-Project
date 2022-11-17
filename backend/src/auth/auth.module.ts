import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {JwtModule} from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
      ConfigModule.forRoot(),
      UsersModule,
      PassportModule,
      JwtModule.register({
          privateKey: process.env.JWT_SECRET_KEY,
          signOptions: {expiresIn: '24h'}
      })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule { }
