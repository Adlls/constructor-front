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
import { AddCourseComponent } from './shared/components/edit/course/add-course/add-course.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { UpdateCourseComponent } from './shared/components/edit/course/update-course/update-course.component';
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from '@angular/material/radio';
import { DeleteCourseComponent } from './shared/components/edit/course/delete-course/delete-course.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddTopicComponent } from './shared/components/edit/topic/add-topic/add-topic.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddUsersComponent} from './shared/components/edit/add-users/add-users.component';
import {UpdateTopicComponent} from './shared/components/edit/topic/update-topic/update-topic.component';
import { DeleteTopicComponent } from './shared/components/edit/topic/delete-topic/delete-topic.component';
import { AddLessonComponent } from './shared/components/edit/lesson/add-lesson/add-lesson.component';
import { UpdateLessonComponent } from './shared/components/edit/lesson/update-lesson/update-lesson.component';
import { DeleteLessonComponent } from './shared/components/edit/lesson/delete-lesson/delete-lesson.component';
import { AddLevelsComponent } from './shared/components/edit/levels/add-levels/add-levels.component';
import {MatStepperModule} from '@angular/material/stepper';
import {QuillModule} from 'ngx-quill';
import {inspect} from 'util';
import {style} from '@angular/animations';
import { UpdateLevelsComponent } from './shared/components/edit/levels/update-levels/update-levels.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DeleteLevelsComponent } from './shared/components/edit/levels/delete-levels/delete-levels.component';
import {AuthService} from '../auth/shared/services/auth.service';
import {AuthGuard} from '../auth/shared/services/auth.guard';
import {A} from '@angular/cdk/keycodes';
import {CourseService} from './shared/services/course.service';


@NgModule({
  declarations: [
    UpdateTopicComponent,
    TeacherLayoutComponent,
    DashboardPageComponent,
    CoursesComponent,
    ProgressStudentsComponent,
    CourseComponent,
    TopicComponent,
    CoauthorsPopupComponent,
    StudentsPopupComponent,
    TopOptionsComponent,
    LessonComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    DeleteCourseComponent,
    AddTopicComponent,
    AddUsersComponent,
    AddUsersComponent,
    DeleteTopicComponent,
    AddLessonComponent,
    UpdateLessonComponent,
    DeleteLessonComponent,
    AddLevelsComponent,
    UpdateLevelsComponent,
    DeleteLevelsComponent],
  imports: [

    CommonModule,
    QuillModule.forRoot(),
    RouterModule.forChild([
      {
        path: '', component: TeacherLayoutComponent, canActivate: [AuthGuard], children: [
          {path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]},
          {path: 'courses/:idCourse', component: CourseComponent, canActivate: [AuthGuard]},
          {path: 'courses/:idCourse/:idTopic', component: TopicComponent, canActivate: [AuthGuard]},
          {path: 'courses/:idCourse/:idTopic/:idLesson', component: LessonComponent, canActivate: [AuthGuard]},
          {path: 'progress', component: ProgressStudentsComponent, canActivate: [AuthGuard]}
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
    MatCheckboxModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    MatSlideToggleModule
  ],
  exports: [RouterModule, MatCardModule, QuillModule],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    },
    AuthService,
    AuthGuard,
    CourseService,
  ]

})
export class TeacherModule {

}
