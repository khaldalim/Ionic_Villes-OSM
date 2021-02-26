import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-city-historique',
  templateUrl: './city-historique.page.html',
  styleUrls: ['./city-historique.page.scss'],
})
export class CityHistoriquePage implements OnInit {

  arrayHistory;
  arrayFav;
  arrayNotFav;

  constructor() {

  }

  ngOnInit() {
    this.arrayFav = [];
    this.arrayNotFav = [];
  }

  ionViewDidEnter() {
    this.arrayFav = [];
    this.arrayNotFav = [];
    this.loadHistory();
  }

  loadHistory() {
    this.arrayFav = [];
    this.arrayNotFav = [];
    const array = JSON.parse(localStorage.getItem('allEntries'));
    for (const ville of array) {
      if (ville.favoris === true) {
        this.arrayFav.push(ville);
      } else {
        this.arrayNotFav.push(ville);
      }
    }
  }

  favoris(ville) {
    const arrayHistory = JSON.parse(localStorage.getItem('allEntries'));
    for (const villeCode of arrayHistory) {
      if (villeCode.codeVille === ville.codeVille) {
        if (villeCode.favoris === false) {
          villeCode.favoris = true;
        } else {
          villeCode.favoris = false;
        }
        localStorage.setItem('allEntries', JSON.stringify(arrayHistory));
      }
    }
    this.loadHistory();
  }
}
