import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter: number = 0;

  increaseCounter() {
    this.counter++;
  }
}