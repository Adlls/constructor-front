import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../../../shared/interfaces/interfaces';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class CourseService {
    constructor(private http: HttpClient, private router: Router) { }

    createCourse(course: Course): Observable<any> {
      return this.http.post(`${environment.host}/course`, {
        "title": course.title,
        "description": course.description,
        "author": {
          "id": "5ee39c1dbb6cc361a2df2694"
        },
        "contributors": [
          {
            "id": "string"
          }
        ],
        "followers": [
          {
            "id": "string"
          }
        ],
        "keywords": [
          "string"
        ],
        "skills": [
          "string"
        ],
        "typeAccess": course.typeAccess
      }).pipe();
    }

    findAllCourses(): Observable<any> {
      return this.http.get(`${environment.host}/courses?page=0`).pipe();
    }
}
