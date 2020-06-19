import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { StudentLayoutComponent } from './shared/components/student-layout/student-layout.component';

@NgModule({
  declarations: [StudentLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: StudentLayoutComponent, children: [

        ]}
    ])
  ],
  exports: [RouterModule],
})
export class StudentModule {

}
