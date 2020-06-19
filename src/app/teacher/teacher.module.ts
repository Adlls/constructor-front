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


@NgModule({
  declarations: [TeacherLayoutComponent, DashboardPageComponent, CoursesComponent],
  imports: [

    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: TeacherLayoutComponent, children: [
        //  { path: '/courses', component: }
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
    MatButtonModule
  ],
  exports: [RouterModule, MatCardModule],

})
export class TeacherModule {

}
