import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Lesson} from '../../../../../../shared/interfaces/interfaces';
import {Router} from '@angular/router';
import {LessonService} from '../../../../services/lesson.service';
import {LevelsService} from '../../../../services/levels.service';

@Component({
  selector: 'app-update-levels',
  templateUrl: './update-levels.component.html',
  styleUrls: ['./update-levels.component.scss']
})
export class UpdateLevelsComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  currentLessonId: string;
  currentLesson: Lesson;
  formLevels: FormGroup;
  constructor(private _formBuilder: FormBuilder,
              private router: Router,
              private lessonService: LessonService,
              private  levelService: LevelsService) {
    this.currentLessonId = this.router.url.split("/")[this.router.url.split("/").length - 1];
  }

  ngOnInit(): void {
    this.lessonService.findLessonById(this.currentLessonId).subscribe((lesson_res) => {
      this.currentLesson = lesson_res;
     // console.log(this.currentLesson.levels.bodyLevels[0]);
      this.formLevels = new FormGroup({
        bodyLevel1: new FormControl(this.currentLesson.levels.bodyLevels[0].htmlBody+"", [
            Validators.required
          ]
        ),
        bodyLevel2: new FormControl(this.currentLesson.levels.bodyLevels[1].htmlBody+"", [
            Validators.required
          ]
        ),
        bodyLevel3: new FormControl(this.currentLesson.levels.bodyLevels[2].htmlBody+"", [
            Validators.required
          ]
        )
      });
    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }

  updateLevels() {
    //console.log(this.formLevels.value.bodyLevel1);
    const updateLevels = {
      "bodyLevels": [
        {
          "enabled": true,
          "htmlBody": this.formLevels.value.bodyLevel1+"",
          "numLevel": 1
        },
        {
          "enabled": true,
          "htmlBody": this.formLevels.value.bodyLevel2+"",
          "numLevel": 2
        },
        {
          "enabled": true,
          "htmlBody": this.formLevels.value.bodyLevel3+"",
          "numLevel": 3
        }
      ]
    };
    this.levelService.updateLevels(this.currentLesson.levels.id, updateLevels).subscribe((levels) => {
      window.location.reload();
    })
  }
}
