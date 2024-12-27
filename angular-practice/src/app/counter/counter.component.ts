import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter: number = 0;

  increaseCounter(num: number) {
    this.counter += num;
  }

  decreaseCounter(num: number) {
    this.counter -= num;
  }

  resetCounter() {
    this.counter = 0;
  }
}