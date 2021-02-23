import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.page.html',
  styleUrls: ['./city-form.page.scss'],
})
export class CityFormPage implements OnInit {

  codePostal: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  SearchCity() {
this.router.navigate(['/city-info/' + this.codePostal]);
  }
}
