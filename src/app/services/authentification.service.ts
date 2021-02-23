import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Platform} from '@ionic/angular';
import {User} from '../modeles/user';
import {Storage} from '@ionic/storage';


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

}
