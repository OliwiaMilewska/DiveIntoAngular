import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceObsService {
  activatedEmitter: Subject<boolean> = new Subject<boolean>();
  constructor() { }
}
