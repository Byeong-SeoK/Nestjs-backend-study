import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import * as config from 'config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || config.secret,
      signOptions: {
        expiresIn: config.expiresIn,
      },
    }),
    TypeOrmModule.forRoot(typeORMConfig),
    BoardsModule,
    AuthModule,
  ],
})
export class AppModule {}
