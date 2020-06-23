import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CoauthorsPopupComponent} from './coauthors-popup/coauthors-popup.component';
import {StudentsPopupComponent} from './students-popup/students-popup.component';



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialogCoAuthors() {
    const dialogRef = this.dialog.open(CoauthorsPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogStudents() {
    const dialogRef = this.dialog.open(StudentsPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }
}

