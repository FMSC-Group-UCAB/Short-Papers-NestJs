import config from '../ormconfig';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DoctorsController } from './infrastructure/controllers/doctors.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(config),
  ],
  controllers: [DoctorsController],
  providers: [],
})
export class AppModule { }
