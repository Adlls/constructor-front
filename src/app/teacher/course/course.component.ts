import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {CoauthorsComponent} from './coauthors/coauthors.component';



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CoauthorsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
  }

}
/*
@Component({
  templateUrl: 'coauthors/coauthors.component.html'
})
export class DialogContentExampleDialog implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: CoauthorsComponent) {}
  ngOnInit(): void {
  }
 }
*/

