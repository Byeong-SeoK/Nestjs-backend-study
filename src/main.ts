import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  const serverConfig = config.get('server');
  //config 파일에서의 server key의 value값을 받아와서 변수에 담는다.

  const port = serverConfig.port;
  //server key의 하위 key인 port의 값을 port 변수에 담는다.

  Logger.log(`Application running on port ${port}`);
}
bootstrap();
