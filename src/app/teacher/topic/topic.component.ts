import { Component, OnInit } from '@angular/core';
import {Lesson, Topic} from '../../shared/interfaces/interfaces';
import {Router} from '@angular/router';
import {TopicService} from '../shared/services/topic.service';
import {LessonService} from '../shared/services/lesson.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  targetEditType = "lesson";
  currentTopicId;
  currentCourseId;
  currentTopic: Topic;
  lessons: Array<Lesson> = [];
  constructor(private router: Router, private topicService: TopicService, private lessonService: LessonService) {
    this.currentTopicId = this.router.url.split("/")[this.router.url.split("/").length - 1];
    this.currentCourseId = this.router.url.split("/")[this.router.url.split("/").length - 2];

  }

  ngOnInit(): void {
     this.lessonService.getAllLessons().subscribe((lesson_res) => {
      for (let lesson of lesson_res.content) {
        if (lesson.topic.id == this.currentTopicId) {
          this.lessons.push(lesson);
        }
      }
    });
    this.topicService.findTopicById(this.currentTopicId).subscribe((topic_res) => {
      this.currentTopic = topic_res
    })
  }

}
