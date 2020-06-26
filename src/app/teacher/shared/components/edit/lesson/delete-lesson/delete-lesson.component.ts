import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TopicService} from '../../../../services/topic.service';
import {Router} from '@angular/router';
import {LessonService} from '../../../../services/lesson.service';
import {Lesson} from '../../../../../../shared/interfaces/interfaces';

@Component({
  selector: 'app-delete-lesson',
  templateUrl: './delete-lesson.component.html',
  styleUrls: ['./delete-lesson.component.scss']
})
export class DeleteLessonComponent implements OnInit {
  formDelete: FormGroup;
  currentTopicId: string;
  lessons: Array<Lesson> = [];
  constructor(private lessonService: LessonService, private router: Router) {
    this.currentTopicId = this.router.url.split("/")[this.router.url.split("/").length - 1];
  }

  ngOnInit(): void {
    this.lessonService.getAllLessons().subscribe((response) => {
      for (let lesson of response.content) {
        if (lesson.topic.id == this.currentTopicId) {
          this.lessons.push(lesson);
        }
      }
    });
    this.formDelete = new FormGroup({
      lesson_item: new FormControl(null, [
        Validators.required
      ])
    });
  }
  deleteLesson() {
    this.lessonService.deleteLesson(this.formDelete.value.lesson_item).subscribe(() => {
      //window.location.reload();
    });
  }

}
