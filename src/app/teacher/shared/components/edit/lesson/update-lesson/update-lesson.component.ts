import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-lesson',
  templateUrl: './update-lesson.component.html',
  styleUrls: ['./update-lesson.component.scss']
})
export class UpdateLessonComponent implements OnInit {
  showOptionsTopic = true;
  constructor() { }

  ngOnInit(): void {
  }

  backToOptions() {
    this.showOptionsTopic = true;
  }

  goToUpdate() {
    this.showOptionsTopic = false;
  }

}
