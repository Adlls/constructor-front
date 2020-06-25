import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/interfaces/interfaces';
import {AuthService} from '../shared/services/auth.service';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hidePass = true;
  user: User;
  deniedMessage: string;
  constructor(public auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
        if (params['denied']) {
          this.deniedMessage = "Доступ запрещен"
        }
    });
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.email, Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required, Validators.minLength(6)
      ])
    })
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.user = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.login(this.user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/teacher']);
    })

  }

}
