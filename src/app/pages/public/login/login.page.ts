import {Component, OnInit} from '@angular/core';
import {User} from '../../../modeles/user';
import {AuthentificationService} from '../../../services/authentification.service';
import {AlertController, LoadingController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User;
  loading: any;

  constructor(
    private authService: AuthentificationService,
    private alertController: AlertController,
    private  router: Router,
    private loadController: LoadingController) {
  }

  ngOnInit() {
    this.user = new User();

  }

  login() {
    this.presentLoading();
    this.authService.login(this.user).subscribe(
      (res: any) => {
        this.authService.loginStorage(res.token, this.user).then(() => {
          this.dismissLoading();
          this.router.navigate(['/dashboard']);
        });
      },
      error => {
        console.log(error);
        this.presentAlert();
        this.dismissLoading();
      }
    );
  }

  async presentLoading() {
    this.loading = await this.loadController.create({
      cssClass: 'my-custom-class',
      message: 'Veuillez patienter...'
    });
    await this.loading.present();
  }

  async dismissLoading(){
    this.loading.dismiss();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Erreur de connexion',
     message: 'Veuillez entrer des identifiants correct.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
