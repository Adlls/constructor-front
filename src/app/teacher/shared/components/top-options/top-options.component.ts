import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddCourseComponent} from '../edit/course/add-course/add-course.component';
import {UpdateCourseComponent} from '../edit/course/update-course/update-course.component';
import {DeleteCourseComponent} from '../edit/course/delete-course/delete-course.component';
import {AddTopicComponent} from '../edit/topic/add-topic/add-topic.component';


function openDialog(component: any, dialog: MatDialog) {
    const dialogRef = dialog.open(component);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
}

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
        openDialog(AddCourseComponent, this.dialog);
        break;

      case "topic":
        openDialog(AddTopicComponent, this.dialog);
        break;
    }
  }

  openDialogUpdate() {
    switch (this.targetEdit) {
      case "course":
        openDialog(UpdateCourseComponent, this.dialog);
        break;
      case "topic":
        break;
    }
  }

  openDialogDelete() {
    switch (this.targetEdit) {
      case "course":
        openDialog(DeleteCourseComponent, this.dialog);
        break;

      case "topic":
        break;
    }
  }

  ngOnInit(): void {
  }

}
