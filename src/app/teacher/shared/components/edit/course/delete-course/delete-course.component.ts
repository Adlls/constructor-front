import { Component, OnInit } from '@angular/core';
import {Course} from '../../../../../../shared/interfaces/interfaces';
import {CourseService} from '../../../../services/course.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.scss']
})
export class DeleteCourseComponent implements OnInit {

  courses: Course[];
  formDelete: FormGroup;
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.findAllCourses().subscribe((response) => {
      this.courses = response.content;
    });
    this.formDelete = new FormGroup({
      course_item: new FormControl(null, [
        Validators.required
      ])
    });
  }

  deleteCourses() {
    this.courseService.deleteCourse(this.formDelete.value.course_item).subscribe(() => {
      window.location.reload();
    });
  }
}
