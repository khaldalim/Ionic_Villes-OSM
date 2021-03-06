import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {AuthentificationService} from './services/authentification.service';
import {Router} from '@angular/router';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {


  constructor(private platform: Platform,
              public authService: AuthentificationService,
              private router: Router,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar) {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.authState.subscribe((state) => {
        if (state) {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/login']);
        }
      });
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/']);
    });

  }
}
