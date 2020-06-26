import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CourseService} from '../../../../services/course.service';
import {LessonService} from '../../../../services/lesson.service';
import {Course, Lesson} from '../../../../../../shared/interfaces/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss']
})
export class AddLessonComponent implements OnInit {

  form: FormGroup;
  currentTopicId: string;
  constructor(private lessonService: LessonService, private router: Router) {
    this.currentTopicId = this.router.url.split("/")[this.router.url.split("/").length - 1];
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required
      ]),
      description: new FormControl(null, [
      ])
    })
  }

  addLesson() {
   // console.log(this.currentTopicId.trim());
    const lesson = {
      "author": {
        "id": "5ee39c1dbb6cc361a2df2694"
      },
      "topic": {
        "id": this.currentTopicId
      },
      "relations": {
        "refLessons": [
          {
            "IdLesson": "string",
            "idLesson": "string",
            "typeRelation": "EXTENDED"
          }
        ]
      },
      "levels": {
        "id": "string"
      }
    };

    this.lessonService.createLesson(lesson).subscribe(() => {
     // window.location.reload();
    });

  }

}
