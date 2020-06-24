import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { TeacherLayoutComponent } from './shared/components/teacher-layout/teacher-layout.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule} from '@angular/material/button';
import { CoursesComponent } from './courses/courses.component';
import { ProgressStudentsComponent } from './progress-students/progress-students.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {CourseComponent} from './course/course.component';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { TopicComponent } from './topic/topic.component';
import { CoauthorsPopupComponent } from './course/coauthors-popup/coauthors-popup.component';
import { StudentsPopupComponent } from './course/students-popup/students-popup.component';
import { TopOptionsComponent } from './shared/components/top-options/top-options.component';
import { LessonComponent } from './lesson/lesson.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AddCourseComponent } from './edit/course/add-course/add-course.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { UpdateCourseComponent } from './edit/course/update-course/update-course.component';
import {MatRadioModule} from '@angular/material/radio';
import { DeleteCourseComponent } from './edit/course/delete-course/delete-course.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [TeacherLayoutComponent, DashboardPageComponent, CoursesComponent, ProgressStudentsComponent, CourseComponent, TopicComponent, CoauthorsPopupComponent, StudentsPopupComponent, TopOptionsComponent, LessonComponent, AddCourseComponent, UpdateCourseComponent, DeleteCourseComponent],
  imports: [

    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: TeacherLayoutComponent, children: [
          {path: 'courses', component: CoursesComponent},
          {path: 'courses/:idCourse', component: CourseComponent},
          {path: 'courses/:idCourse/:idTopic', component: TopicComponent},
          {path: 'courses/:idCourse/:idTopic/:idLesson', component: LessonComponent},
          {path: 'progress', component: ProgressStudentsComponent}
        ]
      }
    ]),
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatTreeModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  exports: [RouterModule, MatCardModule],

})
export class TeacherModule {

}
