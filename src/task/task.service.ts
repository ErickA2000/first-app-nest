import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { UpdateTaskDTO } from './dto/task.dto';

@Injectable()
export class TaskService {
  private task: Task[] = [
    {
      id: '1',
      title: 'some',
      description: 'some some',
      status: TaskStatus.PENDING,
    },
  ];
  getAllTask() {
    return this.task;
  }

  getTaskById(id: string) {
    return this.task.find((task) => task.id === id);
  }
  createTask(title: string, description: string) {
    const task = {
      id: new Date().valueOf().toString(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.task.push(task);

    return task;
  }

  updateTask(id: string, updatedFields: UpdateTaskDTO): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updatedFields);
    this.task = this.task.map((task) => (task.id === id ? newTask : task));
    return task;
  }
  deleteTask(id: string) {
    this.task = this.task.filter((task) => task.id !== id);
  }
}
