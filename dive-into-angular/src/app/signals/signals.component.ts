import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SignalsComponent {
  actions: string[] = [];
  counter = 0;

  increment() {
    this.counter++;
    this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter--;
    this.actions.push('DECREMENT');
  }
}
