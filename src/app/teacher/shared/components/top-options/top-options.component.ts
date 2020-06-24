import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddCourseComponent} from '../../../edit/course/add-course/add-course.component';
import {UpdateCourseComponent} from '../../../edit/course/update-course/update-course.component';
import {DeleteCourseComponent} from '../../../edit/course/delete-course/delete-course.component';

@Component({
  selector: 'app-top-options',
  templateUrl: './top-options.component.html',
  styleUrls: ['./top-options.component.scss']
})
export class TopOptionsComponent implements OnInit {

  @Input() targetEdit;


  constructor(public dialog: MatDialog) {}

  openDialogAdd() {
    switch (this.targetEdit) {
      case "course":
        const dialogRef = this.dialog.open(AddCourseComponent);
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
       break;

      case "topic":
        break;
    }
  }

  openDialogUpdate() {
    switch (this.targetEdit) {
      case "course":
        const dialogRef = this.dialog.open(UpdateCourseComponent);
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
        break;
      case "topic":
        break;
    }
  }

  openDialogDelete() {
    switch (this.targetEdit) {
      case "course":
        const dialogRef = this.dialog.open(DeleteCourseComponent);
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
        break;

      case "topic":
        break;
    }
  }

  ngOnInit(): void {
  }

}
