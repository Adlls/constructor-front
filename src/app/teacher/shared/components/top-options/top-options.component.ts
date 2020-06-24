import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddCourseComponent} from '../edit/course/add-course/add-course.component';
import {UpdateCourseComponent} from '../edit/course/update-course/update-course.component';
import {DeleteCourseComponent} from '../edit/course/delete-course/delete-course.component';
import {AddTopicComponent} from '../edit/topic/add-topic/add-topic.component';
import {UpdateTopicComponent} from '../edit/topic/update-topic/update-topic.component';
import {DeleteTopicComponent} from '../edit/topic/delete-topic/delete-topic.component';
import {AddLessonComponent} from '../edit/lesson/add-lesson/add-lesson.component';
import {UpdateLessonComponent} from '../edit/lesson/update-lesson/update-lesson.component';
import {DeleteLessonComponent} from '../edit/lesson/delete-lesson/delete-lesson.component';
import {AddLevelsComponent} from '../edit/levels/add-levels/add-levels.component';
import {UpdateLevelsComponent} from '../edit/levels/update-levels/update-levels.component';
import {DeleteLevelsComponent} from '../edit/levels/delete-levels/delete-levels.component';


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
      case "lesson":
        openDialog(AddLessonComponent, this.dialog);
        break;
      case "levels":
        openDialog(AddLevelsComponent, this.dialog);
        break;
    }
  }

  openDialogUpdate() {
    switch (this.targetEdit) {
      case "course":
        openDialog(UpdateCourseComponent, this.dialog);
        break;
      case "topic":
        openDialog(UpdateTopicComponent, this.dialog);
        break;
      case "lesson":
        openDialog(UpdateLessonComponent, this.dialog);
        break;
      case "levels":
        openDialog(UpdateLevelsComponent, this.dialog);
        break;
    }
  }

  openDialogDelete() {
    switch (this.targetEdit) {
      case "course":
        openDialog(DeleteCourseComponent, this.dialog);
        break;
      case "topic":
        openDialog(DeleteTopicComponent, this.dialog);
        break;
      case "lesson":
        openDialog(DeleteLessonComponent, this.dialog);
        break;
      case "levels":
        openDialog(DeleteLevelsComponent, this.dialog);
        break;
    }
  }

  ngOnInit(): void {
  }

}
