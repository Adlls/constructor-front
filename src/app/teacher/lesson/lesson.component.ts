import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TopicService} from '../shared/services/topic.service';
import {Topic} from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  targetEditType = "levels";

  constructor(private router: Router, private topicService: TopicService) {
   // this.currentTopicId = this.router.url.split("/")[this.router.url.split("/").length - 1];
  }

  ngOnInit(): void {
    /*
    this.topicService.findTopicById(this.currentTopicId).subscribe((topic_res) => {
      this.currentTopicId = topic_res
    })
     */
  }

}
