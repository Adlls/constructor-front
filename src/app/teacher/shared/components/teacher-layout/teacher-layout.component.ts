import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../auth/shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teacher-layout',
  templateUrl: './teacher-layout.component.html',
  styleUrls: ['./teacher-layout.component.scss']
})
export class TeacherLayoutComponent implements OnInit {

  constructor(private auth: AuthService) { }

  logout() {
    this.auth.logout();


  }

  ngOnInit(): void {
  }
}
