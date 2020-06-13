import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { TeacherLayoutComponent } from './shared/components/teacher-layout/teacher-layout.component';
import {PageLoginComponent} from '../shared/components/page-login/page-login.component';

@NgModule({
  declarations: [TeacherLayoutComponent, PageLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TeacherLayoutComponent, children: [
          { path: '', redirectTo: 'teacher/login', pathMatch: 'full' },
          { path: '', component: PageLoginComponent}
        ]
      }
    ])
  ],
  exports: [RouterModule],

})
export class TeacherModule {

}
