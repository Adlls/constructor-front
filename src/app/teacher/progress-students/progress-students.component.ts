import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from '../shared/services/course.service';
import {Course} from '../../shared/interfaces/interfaces';
import {Subscription} from 'rxjs';
import {ProgressService} from '../shared/services/progress.service';
import {Student} from '../course/students-popup/students-popup.component';



export interface StudentsProgress {
    idCourse: string,
    name: string;
    progress: string;
    current_level: string;
    current_lesson: string;

}

@Component({
  selector: 'app-progress-students',
  templateUrl: './progress-students.component.html',
  styleUrls: ['./progress-students.component.scss']
})
export class ProgressStudentsComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  students: StudentsProgress[] = [];
  displayedColumns: string[] = ['name', 'current_lesson','current_level', 'progress'];
  courses: Course[];
  getAllCourse: Subscription;
  getAllProgressByCourseId: Subscription;
  constructor(private courseService: CourseService, private progressService: ProgressService) {

  }

  ngOnInit(): void {
    this.getAllCourse = this.courseService.findAllCourses().subscribe((course_res) => {

      for (let course of course_res.content) {
        this.getAllProgressByCourseId =
          this.progressService.getProgressByCourseId(course.id).subscribe((progress_res) => {
            this.courses = course_res.content;
            for (let progress of progress_res) {
              //смотрим для одного студента
              let current_lesson: string = "";
              let current_level: string = "";
              const countLessons: number = progress['lessonProgress'].length;
              let completedLessons: number = 0;
              for (let lessonProgress of progress['lessonProgress']) {
                if (lessonProgress.completed == false) {
                  current_lesson = lessonProgress.lesson.id;
                  current_level = lessonProgress.currentLevel;
                } else {
                  current_lesson = "все пройдено";
                  completedLessons++;
                }
              }
              let student: StudentsProgress = {
                idCourse: course.id,
                name: progress['student'].id,
                progress: countLessons == 0 ? "0%" : completedLessons/countLessons+"%",
                current_level: current_level,
                current_lesson: current_lesson
              };
              this.students.push(student);

            }
          });
      }
    });

  }

  ngOnDestroy(): void {
    this.getAllCourse.unsubscribe();
    this.getAllProgressByCourseId.unsubscribe();
  }

}
