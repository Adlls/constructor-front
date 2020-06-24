import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-topic',
  templateUrl: './update-topic.component.html',
  styleUrls: ['./update-topic.component.scss']
})
export class UpdateTopicComponent implements OnInit {
  showOptionsTopic = true;
  constructor() { }

  backToOptions() {
    this.showOptionsTopic = true;
  }

  goToUpdate() {
    this.showOptionsTopic = false;
  }


  ngOnInit(): void {
  }

}
