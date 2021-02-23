import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../../../services/authentification.service';
import {User} from '../../../modeles/user';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  user: User;

  constructor(private authService: AuthentificationService) {
  }

  ngOnInit() {
    this.user = new User();
    this.authService.getUser().then((data: User) => {
      this.user = data;
    });
  }



}
