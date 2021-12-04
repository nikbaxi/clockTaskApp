import { Component } from '@angular/core';

export interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface task {
  name: string;
  startData: Date;
  endDate: Date;
  startTime: Time;
  endTIme: Time;
  totalTime: Time;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clockTaskApp';

  tasks: Array<task> = [];

  addTask = (newTask: task) => {
    this.tasks.push(newTask);
  };
}
