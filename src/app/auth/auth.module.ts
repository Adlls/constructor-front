import {NgModule} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {AuthService} from './shared/services/auth.service';
import {SharedModule} from '../shared/shared.module';
import {AuthGuard} from './shared/services/auth.guard';


@NgModule({
  declarations: [LoginComponent, SingupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
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
  providers: [AuthService, AuthGuard]
})
export class AuthModule {

}
