import {NgModule} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [LoginComponent, SingupComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      {path: 'singup', component: SingupComponent}
    ]),
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AuthModule {

}
