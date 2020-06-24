import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface Student {
  name: string;
  progress: string;
  current_theme: string;
  current_lesson: string;
}

const students: Student[] = [
  { name: 'Иванов И. И.', current_theme: 'IP-адресса', current_lesson: 'классы адрессов', progress: '10/100'},
  { name: 'Черноусов C. C.', current_theme: 'HTML', current_lesson: 'Теги', progress: '70/100'}
];

@Component({
  selector: 'app-students-popup',
  templateUrl: './students-popup.component.html',
  styleUrls: ['./students-popup.component.scss']
})
export class StudentsPopupComponent implements OnInit {
  displayedColumns: string[] = ['name', 'current_theme','current_lesson', 'progress'];
  dataSource = students;
  typeUser = "student";

  constructor() { }

  ngOnInit(): void {

  }


}

