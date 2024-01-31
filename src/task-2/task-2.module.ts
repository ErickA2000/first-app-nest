import { Module } from '@nestjs/common';
import { Task2Service } from './task-2.service';
import { Task2Controller } from './task-2.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [Task2Service],
  controllers: [Task2Controller],
  imports: [PrismaModule],
})
export class Task2Module {}
