import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Lesson, Topic} from '../../shared/interfaces/interfaces';
import {LessonService} from '../shared/services/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  targetEditType = "levels";
  currentLessonId: string;
  currentLesson: Lesson;
  constructor(private router: Router, private lessonService: LessonService) {
    this.currentLessonId = this.router.url.split("/")[this.router.url.split("/").length - 1];
  }

  ngOnInit(): void {
    this.lessonService.findLessonById(this.currentLessonId).subscribe((lesson_res) => {
      this.currentLesson = lesson_res;
    });

  }

}
