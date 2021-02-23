import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthentificationService} from '../services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {


  constructor(private authService: AuthentificationService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAutenticated();
  }

}
