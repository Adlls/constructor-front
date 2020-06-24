import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  @Input() targetEditUser;
  control = new FormControl();
  filteredOptions: Observable<string[]>;
  viewForm = false;
  whoAdd: String;
  options: string[];

  showForm() {
    this.viewForm = true;
  }

  closeForm() {
    this.viewForm = false;
  }

  constructor() {
  }


  ngOnInit(): void {
    if (this.targetEditUser == 'student') {
      this.whoAdd = 'студента';
      this.options = [' Иван И. И.', 'Студент 2', 'Студент 3'];
    } else if (this.targetEditUser == 'teacher') {
      this.whoAdd = 'преподавателя';
      this.options = ['Преподы И. И', 'Препод 2', 'Препод 3'];
    }

    this.filteredOptions = this.control.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
