import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CoauthorsPopupComponent} from './coauthors-popup/coauthors-popup.component';
import {StudentsPopupComponent} from './students-popup/students-popup.component';
import {TopicService} from '../shared/services/topic.service';
import {Subscription} from 'rxjs';
import {Course, Topic} from '../../shared/interfaces/interfaces';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {CourseService} from '../shared/services/course.service';



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  targetEditType = "topic";
  getAllTopics: Subscription;
  topics: Array<Topic> = [];
  current_course: Course;
  currentCourseId: string;
  constructor(public dialog: MatDialog,
              private topicService: TopicService,
              private router: Router,
              private courseService: CourseService) {
    this.currentCourseId = this.router.url.split("/")[this.router.url.split("/").length - 1];
  }

  openDialogCoAuthors() {
    const dialogRef = this.dialog.open(CoauthorsPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogStudents() {
    const dialogRef = this.dialog.open(StudentsPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.getAllTopics = this.topicService.getAllTopics().subscribe((topic_res) => {
      for (let topic of topic_res.content) {
        if (topic.course.id == this.currentCourseId) {
          this.topics.push(topic);
        }
      }
    });
    this.courseService.findCourseById(this.currentCourseId).subscribe((course_res) => {
      this.current_course = course_res;
    })
  }
}

