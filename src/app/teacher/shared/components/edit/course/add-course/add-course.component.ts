import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Course} from '../../../../../../shared/interfaces/interfaces';
import {CourseService} from '../../../../services/course.service';

export interface Skill {
  skill: string;
}

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  defaultAccessType = 'Приватный';
  form: FormGroup;
  constructor(private courseService: CourseService) {
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required
      ]),
      description: new FormControl(null, [
        Validators.required
      ]),
      typeAccess: new FormControl(null, [
        Validators.required
      ]),
      skills: new FormControl(null, [
      ]),
    })
  }

  addCourse() {
    console.log("added");
    const course: Course = {
      title: this.form.value.title,
      description: this.form.value.description,
      typeAccess: this.form.value.typeAccess,
      skills: this.form.value.skills
    };
    console.log(this.form.value.typeAccess);
    this.courseService.createCourse(course).subscribe(() => {
      this.form.reset();
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

    // Add our fruit
    if ((value || '').trim()) {
      this.skills.push({skill: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(skill: Skill): void {
    const index = this.skills.indexOf(skill);
    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

}

