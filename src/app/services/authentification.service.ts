import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Platform} from '@ionic/angular';
import {User} from '../modeles/user';
import {Storage} from '@ionic/storage';
import {catchError, retry} from 'rxjs/operators';


const TOKEN_KEY = 'TOKEN';
const USER_KEY = 'USER';


@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {

  authState = new BehaviorSubject(false);

  apiBaseUrl = 'https://reqres.in/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json'
    })
  };

  constructor(private httpClient: HttpClient,
              private storage: Storage,
              private  plateform: Platform) {
    this.plateform.ready().then(() => {
      this.checkToken();
    });
  }

  login(user: User) {
    return this.httpClient.post(this.apiBaseUrl + '/login', user, this.httpOptions);
  }

  loginStorage(token: string, user: User) {
    return this.storage.set(TOKEN_KEY, token).then(() => {
      this.storage.set(USER_KEY, user).then(() => {
        this.authState.next(true);
      });
    });
  }

  getUser() {
    return this.storage.get(USER_KEY);
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authState.next(false);
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authState.next(true);
      }
    });
  }

  isAutenticated() {
    return this.authState.value;
  }

  createUser(user: User): any {
    try {
      console.log(this.httpClient.post(this.apiBaseUrl + '/register', user, this.httpOptions).subscribe(data => {
        console.log(data);
      }));
    } catch (err) {
      console.log(err);
    }
    return this.httpClient.post(this.apiBaseUrl + '/register', user, this.httpOptions);
  }

  // Handle API errors
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
