import {Component, OnInit} from '@angular/core';
import {User} from '../../../modeles/user';
import {AuthentificationService} from '../../../services/authentification.service';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService: AuthentificationService, private router: Router, private loadController: LoadingController) {
  }

  loading: any;
  user: User;

  ngOnInit() {
    this.user = new User();
    this.loading = this.loadController;
  }

  RegisterForm() {
    console.log('register');
    this.authService.createUser(this.user);
    this.router.navigate(['/login']);
  }


}
