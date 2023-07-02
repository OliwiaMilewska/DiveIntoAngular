import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { LoggingService } from './shared/services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipe-app';

  constructor(private _auth: AuthService, private _log: LoggingService) { }

  ngOnInit(): void {
    this._auth.autoLogin();
    this._log.printLog('Hello form AppComponent!');
  }
}
