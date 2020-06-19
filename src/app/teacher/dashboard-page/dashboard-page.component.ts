import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  backgroundItemBtn = false;

  constructor() { }

  ngOnInit(): void {
  }

}
