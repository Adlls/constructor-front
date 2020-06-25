import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ProgressService {
  constructor(private http: HttpClient) { }

  getProgressByCourseId(courseId: String): Observable<any> {
    return this.http.get(`${environment.host}/progress/${courseId}`).pipe();
  }

}
