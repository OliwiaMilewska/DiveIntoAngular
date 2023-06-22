import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  amountArray: number[] = [];
  
  onCounterEmitted(event: any): void {
    this.amountArray.push(event);
  }
}
