import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAllTask() {
    return {
      success: true,
      data: this.taskService.getAllTask(),
    };
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDTO) {
    const task = this.taskService.createTask(
      newTask.title,
      newTask.description,
    );
    return {
      success: true,
      data: task,
    };
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDTO) {
    const updatedTask = this.taskService.updateTask(id, updatedFields);
    return {
      success: true,
      data: updatedTask,
    };
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.taskService.deleteTask(id);
    return {
      success: true,
    };
  }
}
