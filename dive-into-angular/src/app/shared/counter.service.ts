import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactive: number = 0;
  inactiveToActive: number = 0;

  constructor() { }

  increaseActiveToInactive(): void {
    this.activeToInactive++;
    console.log('Changes from active to inactive:' + this.activeToInactive);

  }

  increaseInactiveToActive(): void {
    this.inactiveToActive++;
    console.log('Changes from inactive to active:' + this.inactiveToActive);
  }
}
