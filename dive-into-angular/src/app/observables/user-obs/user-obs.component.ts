import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-obs',
  templateUrl: './user-obs.component.html',
  styleUrls: ['./user-obs.component.css']
})
export class UserObsComponent implements OnInit{
  id!: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }
}
