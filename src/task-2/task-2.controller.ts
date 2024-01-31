import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Task2Service } from './task-2.service';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task-2.dto';

@Controller('task-2')
export class Task2Controller {
  constructor(private readonly task2Service: Task2Service) {}

  @Get()
  async getAllTask() {
    try {
      const tasks = await this.task2Service.getAllTask();
      return {
        success: true,
        data: tasks,
      };
    } catch (error) {
      return {
        success: false,
        message: error,
      };
    }
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    try {
      const task = await this.task2Service.getTaskById(Number(id));
      if (!task)
        return {
          success: false,
          message: 'Not found task',
        };
      return {
        success: true,
        data: task,
      };
    } catch (error) {
      return {
        success: false,
        message: error,
      };
    }
  }

  @Post()
  async createTask(@Body() data: CreateTaskDTO) {
    try {
      const task = await this.task2Service.createTask(data);
      return {
        success: true,
        data: task,
      };
    } catch (error) {
      return {
        success: false,
        message: error,
      };
    }
  }

  @Patch(':id')
  async updateTask(@Param('id') id: string, @Body() data: UpdateTaskDTO) {
    try {
      const task = await this.task2Service.updateTask(parseInt(id), data);
      return {
        success: true,
        data: task,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Task not found',
      };
    }
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    try {
      const task = await this.task2Service.deleteTask(Number(id));
      return {
        success: true,
        data: task,
      };
    } catch (error) {
      return {
        success: false,
        message: error,
      };
    }
  }
}
