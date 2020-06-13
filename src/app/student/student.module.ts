import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { StudentLayoutComponent } from './shared/components/student-layout/student-layout.component';
import {PageLoginComponent} from '../shared/components/page-login/page-login.component';

@NgModule({
  declarations: [StudentLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: StudentLayoutComponent, children: [
          { path: '', redirectTo: 'student/login', pathMatch: 'full'},
          { path: '', component: PageLoginComponent}
        ]}
    ])
  ],
  exports: [RouterModule],
})
export class StudentModule {

}
