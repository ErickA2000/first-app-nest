import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { Task2Module } from './task-2/task-2.module';

@Module({
  imports: [TaskModule, Task2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
