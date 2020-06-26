import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Course, Topic} from '../../../../../../shared/interfaces/interfaces';
import {TopicService} from '../../../../services/topic.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-topic',
  templateUrl: './update-topic.component.html',
  styleUrls: ['./update-topic.component.scss']
})
export class UpdateTopicComponent implements OnInit {
  showOptionsTopic = true;
  formChoiceOpt: FormGroup;
  formUpdateTopic: FormGroup;
  topics: Array<Topic> = [];
  currentCourseId: string;
  isChoice = false;
  current_topic: Topic;
  current_id: string;

  constructor(private topicService: TopicService, private router: Router) {
    this.currentCourseId = this.router.url.split("/")[this.router.url.split("/").length - 1];
  }

  ngOnInit(): void {
    this.topicService.getAllTopics().subscribe((topic_res) => {
      for (let topic of topic_res.content) {
        if (topic.course.id == this.currentCourseId) {
          this.topics.push(topic);
        }
      }
    });
    this.formChoiceOpt = new FormGroup({
      course_item: new FormControl( [
        Validators.required
      ])
    });
  }

  backToOptions() {
    this.showOptionsTopic = true;
    this.isChoice = false;
  }

  goToUpdate() {
    this.showOptionsTopic = false;
    const current_id = this.formChoiceOpt.value.course_item;
    this.topicService.findTopicById(current_id).subscribe((response) => {
      this.current_topic = {
        title: response.title,
        course: {
          id: this.currentCourseId
        }
      };
      this.formUpdateTopic = new FormGroup({
        title: new FormControl(this.current_topic.title, [
          Validators.required
        ]),
        description: new FormControl("lorem", [

        ])

      });
      this.current_id = current_id;
      console.log(response.title + "title res");
      this.isChoice = true;
    });
  }

  updateTopic() {
    const topic: Topic = {
      title: this.formUpdateTopic.value.title,
      author: "5ee39c1dbb6cc361a2df2694",
      course: {}
    };
     this.topicService.updateCourse(this.current_id, topic).subscribe(() => {
     // window.location.reload();
    });

  }

}
