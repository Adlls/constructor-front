import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';


@Injectable()
export class LevelsService {
  constructor(private http: HttpClient) { }

  updateLevels(idLevels: string, bodyLevels: any): Observable<any> {
    return this.http.put(`${environment.host}/level/${idLevels}`, bodyLevels).pipe();
  }
}
