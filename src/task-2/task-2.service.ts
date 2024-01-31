import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task-2.dto';

@Injectable()
export class Task2Service {
  constructor(private prisma: PrismaService) {}

  async getAllTask(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }
  async getTaskById(id: number): Promise<Task> {
    return this.prisma.task.findUnique({
      where: {
        id,
      },
    });
  }

  async createTask(data: CreateTaskDTO): Promise<Task> {
    return this.prisma.task.create({
      data,
    });
  }
  async updateTask(id: number, data: UpdateTaskDTO): Promise<Task> {
    return this.prisma.task.update({
      where: {
        id,
      },
      data,
    });
  }
  async deleteTask(id: number): Promise<Task> {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
