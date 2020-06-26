import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Lesson} from '../../../shared/interfaces/interfaces';

@Injectable()
export class LessonService {
  constructor(private http: HttpClient) { }

  getAllLessons(): Observable<any> {
    return this.http.get(`${environment.host}/lessons?page=0`).pipe();
  }

  createLesson(lesson: Lesson): Observable<any> {
    return this.http.post(`${environment.host}/lesson`, lesson).pipe();
  }

  deleteLesson(idLesson): Observable<any> {
    return this.http.delete(`${environment.host}/lesson/${idLesson}`).pipe();
  }

}
