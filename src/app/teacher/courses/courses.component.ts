import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from '../shared/services/course.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {
  targetEditType = "course";
  courses: any[];
  subscribeCourse: Subscription;
  constructor(public course: CourseService) { }

  ngOnInit(): void {
    this.subscribeCourse = this.course.findAllCourses().subscribe(courses => {
      this.courses = courses.content;
      console.log(this.courses);
    })
  }

  ngOnDestroy(): void {
    this.subscribeCourse.unsubscribe();
  }

}
