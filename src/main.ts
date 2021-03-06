import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const frontendWebUrl = new RegExp(((JSON.parse(process.env.HTTPS)) ? "^https:\/\/" : "^http:\/\/") + process.env.FRONTEND_URL.replace(/(^\w+:|^)\/\//, ''));

  app.enableCors({
    origin: frontendWebUrl,
    methods: 'GET,HEAD,PATCH,POST,DELETE',
    preflightContinue: false,
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true
    })
  );

  await app.listen(Number.parseInt(process.env.PORT) || 3000);
}
bootstrap();
