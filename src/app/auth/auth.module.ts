import {NgModule} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [LoginComponent, SingupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      {path: 'singup', component: SingupComponent}
    ]),
    MatFormFieldModule,
    MatIconModule,
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AuthModule {

}
