import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  progress: string;
  current_theme: string;
  current_lesson: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Иванов И. И.', current_theme: 'IP-адресса', current_lesson: 'классы адрессов', progress: '10/100'},
  { name: 'Черноусов C. C.', current_theme: 'HTML', current_lesson: 'Теги', progress: '70/100'}
];


@Component({
  selector: 'app-coauthors',
  templateUrl: './coauthors.component.html',
  styleUrls: ['./coauthors.component.scss']
})
export class CoauthorsComponent implements OnInit {
  panelOpenState = false;
  displayedColumns: string[] = ['name',  'current_theme','current_lesson', 'progress'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
