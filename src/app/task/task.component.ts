import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Output() dataEvent = new EventEmitter();

  constructor() {}

  taskName = '';

  stop = true;
  date: any;
  count = 0;
  seconds = '00';
  minutes = '00';
  hours = '00';
  days = '00';
  interval: any;

  ngOnInit(): void {}

  createTask = () => {
    this.date = new Date();
    console.log(this.date);
    this.interval = setInterval(this.startTime, 1000);
    console.log(this.interval);
  };

  stopTask = () => {
    clearInterval(this.interval);
    this.dataEvent.emit('hello');
  };

  startTime = () => {
    var now = new Date().getTime();
    var distance = now - this.date;

    // console.log(distance);

    // Time calculations for days, hours, minutes and seconds
    this.days = ('0' + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);

    this.hours = (
      '0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).slice(-2);

    this.minutes = (
      '0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    ).slice(-2);

    this.seconds = ('0' + Math.floor((distance % (1000 * 60)) / 1000)).slice(
      -2
    );

    console.log(this.minutes, this.seconds);
  };
}
