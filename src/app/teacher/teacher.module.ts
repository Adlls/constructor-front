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


@NgModule({
  declarations: [TeacherLayoutComponent, DashboardPageComponent, CoursesComponent, ProgressStudentsComponent, CourseComponent, TopicComponent, CoauthorsPopupComponent, StudentsPopupComponent],
  imports: [

    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: TeacherLayoutComponent, children: [
          { path: 'courses', component: CoursesComponent},
          { path: 'courses/:idCourse', component: CourseComponent },
          { path: 'courses/:idCourse/:idTopic', component: TopicComponent},
          { path: 'progress', component: ProgressStudentsComponent }
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
    MatDialogModule
  ],
  exports: [RouterModule, MatCardModule],

})
export class TeacherModule {

}
