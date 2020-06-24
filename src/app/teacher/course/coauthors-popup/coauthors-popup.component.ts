import { Component, OnInit } from '@angular/core';


export interface Coauthor {
  name: string;
  position: string;
}

let coauthors: Coauthor[] = [
  { name: 'Иванов И. И.',  position: 'Prepod'},
  { name: 'Черноусов C. C.', position: 'Ne prepod'}
];


@Component({
  selector: 'app-coauthors',
  templateUrl: './coauthors-popup.component.html',
  styleUrls: ['./coauthors-popup.component.scss']
})
export class CoauthorsPopupComponent implements OnInit {
  displayedColumns: string[] = ['name', 'position'];
  dataSource = coauthors;
  typeUser = 'teacher';

  constructor() { }

  ngOnInit(): void {
  }

}
