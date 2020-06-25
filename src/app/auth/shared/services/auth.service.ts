import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {ResponseLoginUser, User} from '../../../shared/interfaces/interfaces';
import {Observable, Subject, throwError} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  };
  get token(): string {
    const expDate = new Date(localStorage.getItem('token_exp'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('token');
  }

  private setToken(response: ResponseLoginUser | null) {
    if (response) {
      //генерить потом должны будем на сервере время жизни токена
      const expDate = new Date(new Date().getTime() + 12345678);
      localStorage.setItem('token', response.token);
      localStorage.setItem('token_exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }

  login(user: User): Observable<any> {
    return this.http.post(`http://localhost:8080/api/login`, {
      "email": user.email,
      "password": user.password
    }).pipe(
      tap(this.setToken),
      catchError(this.handleError.bind(this))
    );

  }

  handleError(error: HttpErrorResponse) {
    const {message} = error.error;
    console.log(message);
    if (message) {
      this.error$.next("Неверные данные");
    }
    return throwError(error);

  }

  logout() {
    this.setToken(null);
    this.router.navigate(['/auth', 'login'])
  }


  isAuth(): boolean {
    return !!this.token;
  }

}
