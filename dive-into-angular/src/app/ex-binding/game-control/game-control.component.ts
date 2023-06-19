import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output('counter') emitCounter = new EventEmitter<number>();
  counter: number = 0;
  intervalID: any;

  onStart(): void {
    this.intervalID = setInterval(() => {
      this.onInterval();
    }, 1000);
  }

  onStop(): void {
    clearInterval(this.intervalID);
    this.counter = 0;
  }

  onInterval(): void {
    this.incrementCounter();
    this.emitCounter.emit(this.counter);
  }

  incrementCounter(): void {
    this.counter++;
  }
}