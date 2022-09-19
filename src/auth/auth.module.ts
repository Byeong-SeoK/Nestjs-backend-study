import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'Secret1234',
      signOptions: {
        expiresIn: 60 * 60,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  //이 providers의 JwtStrategy는 auth 모듈에서 JwtStrategy를 사용하기 위해서이다.

  exports: [JwtStrategy, PassportModule],
  //이 exports의 JwtStrategy는 auth가 아닌 다른 모듈에서 JwtStrategy를 사용하기 위해서이다.
})
export class AuthModule {}
