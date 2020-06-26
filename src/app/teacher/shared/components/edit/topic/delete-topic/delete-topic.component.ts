import { Component, OnInit } from '@angular/core';
import {Course, Topic} from '../../../../../../shared/interfaces/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CourseService} from '../../../../services/course.service';
import {TopicService} from '../../../../services/topic.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-delete-topic',
  templateUrl: './delete-topic.component.html',
  styleUrls: ['./delete-topic.component.scss']
})
export class DeleteTopicComponent implements OnInit {
  topics: Array<Topic> = [];
  formDelete: FormGroup;
  currentCourseId: string;
  constructor(private topicService: TopicService, private router: Router) {
    this.currentCourseId = this.router.url.split("/")[this.router.url.split("/").length - 1];

  }

  ngOnInit(): void {
    this.topicService.getAllTopics().subscribe((response) => {
      for (let topic of response.content) {
        if (topic.course.id == this.currentCourseId) {
          this.topics.push(topic);
        }
      }
    });
    this.formDelete = new FormGroup({
        course_item: new FormControl(null, [
        Validators.required
      ])
    });
  }

  deleteCourses() {
    this.topicService.deleteTopic(this.formDelete.value.course_item).subscribe(() => {
      window.location.reload();
    });
  }

}
