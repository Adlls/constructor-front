import {Component, OnDestroy, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {CourseService} from '../../../../services/course.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Course} from '../../../../../../shared/interfaces/interfaces';
import {Subscription} from 'rxjs';

export interface Skill {
  skill: string;
}


@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit, OnDestroy {
  showOptionsCourse = true;
  formChoiceOpt: FormGroup;
  formUpdateCourse: FormGroup;
  courses: any[];
  current_id: string;
  subscribeCourseFindAll: Subscription;
  findCourseById: Subscription;
  updateCourseSub: Subscription;
  isChoice = false;
  current_course: Course;

  constructor(private courseService: CourseService) { }

  ngOnDestroy(): void {
    //this.subscribeCourseFindAll.unsubscribe();
    //this.findCourseById.unsubscribe();
    //this.updateCourseSub.unsubscribe();
  }

  ngOnInit(): void {
    this.subscribeCourseFindAll  = this.courseService.findAllCourses().subscribe((course) => {
      this.courses = course.content;
    });

    this.formChoiceOpt = new FormGroup({
      course_item: new FormControl(null, [
        Validators.required
      ])
    });

  }

  backToOptions() {
    this.showOptionsCourse = true;
    this.isChoice = false;
  }

  goToUpdate() {
     this.showOptionsCourse = false;
     const current_id = this.formChoiceOpt.value.course_item;
     this.findCourseById = this.courseService.findCourseById(current_id).subscribe((response) => {
       this.current_course = {
         title: response.title,
         description: response.description,
         typeAccess: response.typeAccess,
         skills: response.skills
       };
       this.formUpdateCourse = new FormGroup({
         title: new FormControl(this.current_course.title, [
           Validators.required
         ]),
         description: new FormControl(this.current_course.description, [
           Validators.required
         ]),
         typeAccess: new FormControl(this.current_course.typeAccess, [
           Validators.required
         ]),
         skills: new FormControl(this.current_course.skills, [
         ]),
       });
      this.current_id = current_id;
      console.log(response.title + "title res");
      this.isChoice = true;
    });
  }

  updateCourse() {
    const course: Course = {
      title: this.formUpdateCourse.value.title,
      description: this.formUpdateCourse.value.description,
      typeAccess: this.formUpdateCourse.value.typeAccess,
      skills: this.formUpdateCourse.value.skills,
      author: "5ee39c1dbb6cc361a2df2694"
    };
    console.log(course.title);
   this.updateCourseSub = this.courseService.updateCourse(this.current_id, course).subscribe(() => {
     window.location.reload();
   });

  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  skills: Skill[] = [
    {skill: 'Пример навыка'}
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.skills.push({skill: value.trim()});
    }

    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Skill): void {
    const index = this.skills.indexOf(fruit);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }


}
