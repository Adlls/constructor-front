import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  /*
  {
    path: '', component: StudentLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomePageComponent },
      { path: 'courses/:id', component: CoursesPageComponent }
    ]
  },
   */
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule)},
  { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
