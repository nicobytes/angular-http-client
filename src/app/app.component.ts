import { Component } from '@angular/core';

import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-http-client';

  constructor(
    private taskService: TaskService
  ) {}

  getAllTasks() {
    this.taskService.getAllTasks()
    .subscribe(todos => {
      console.log(todos);
    });
  }

  getTask() {
    this.taskService.getTask('1')
    .subscribe(todo => {
      console.log(todo);
    });
  }

  updateTask() {
    const task = {
      id: '1',
      userId: '1',
      title: 'change title',
      completed: true
    };
    this.taskService.updateTask(task)
    .subscribe(todo => {
      console.log(todo);
    });
  }

  deleteTask() {
    this.taskService.deleteTask('1')
    .subscribe((data) => {
      console.log(data);
    });
  }

  createTask() {
    const task = {
      id: '12',
      userId: '1',
      title: 'change title',
      completed: true
    };
    this.taskService.createTask(task)
    .subscribe((newTask) => {
      console.log(newTask);
    });
  }

}
