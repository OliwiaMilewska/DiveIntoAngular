import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home-obs',
  templateUrl: './home-obs.component.html',
  styleUrls: ['./home-obs.component.css']
})
export class HomeObsComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  customSub!: Subscription;

  ngOnInit(): void {
    this.sub = interval(1000).subscribe((count: number) => console.log(count));

    // Custom Observable
    const customIntervalObservable = new Observable((observer: { next: (count: number) => void; error: (error: Error) => void; complete: () => void; }) => {
      let count: number = 0
      setInterval(() => {
        observer.next(count);
        if (count == 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    this.customSub = customIntervalObservable.pipe(filter((data: number) => data % 2 !== 0), map((data: number) => {
      return 'Round: ' + (data + 1);
    }))
      .subscribe(
        (data: string) => console.log(data),
        (error: string) => alert(error),
        () => console.log('Completed custom observable.'));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.customSub.unsubscribe();
  }
}