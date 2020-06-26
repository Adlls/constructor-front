import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Course, Topic} from '../../../../../../shared/interfaces/interfaces';
import {Route, Router} from '@angular/router';
import {TopicService} from '../../../../services/topic.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.scss']
})
export class AddTopicComponent implements OnInit {
  form: FormGroup;
  currentCourseId: string;
  constructor(private router: Router, private topicService: TopicService) {
    this.currentCourseId = this.router.url.split("/")[this.router.url.split("/").length - 1];

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

  addTopic() {
    const course: Topic = {
      title: this.form.value.title,
      course: {
        id: this.currentCourseId
      },
      author: "5ee39c1dbb6cc361a2df2694"
    };
      this.topicService.createTopic(course).subscribe((res) => {
        window.location.reload();
      })
  }




}
