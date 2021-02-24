import {Component, OnInit, OnDestroy} from '@angular/core';
import * as Leaflet from 'leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import {CityMapService} from '../../../services/city-map.service';
import {ActivatedRoute} from '@angular/router';
import {City} from '../../../modeles/city';
import {LoadingController, NavController, Platform} from '@ionic/angular';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.page.html',
  styleUrls: ['./city-info.page.scss'],
})
export class CityInfoPage implements OnInit, OnDestroy {

  map: Leaflet.Map;
  city: City;
  loading: any;
  road: string;
  iab: InAppBrowser;

  constructor(
    private cityMapService: CityMapService,
    private acR: ActivatedRoute,
    private loadController: LoadingController,
    public platform: Platform) {
  }

  ngOnInit() {
    this.iab = new InAppBrowser();
    this.city = new City();
    this.presentLoading();
  }

  ionViewDidEnter() {
    this.city = new City();
    this.loadCityInfos();
  }


  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map.remove();
  }


  /* GET data  */
  private async loadCityInfos() {

    return this.cityMapService.getCityInfo(this.acR.snapshot.params.codePostal).subscribe(
      (cityData: any) => {
        const loadCity = new City();
        console.log(cityData);
        if (cityData.length !== 0) {
          loadCity.nom = cityData[0].nom;
          loadCity.longitude = cityData[0].centre.coordinates[0];
          loadCity.latitude = cityData[0].centre.coordinates[1];
          loadCity.population = cityData[0].population;
          loadCity.surface = cityData[0].surface;
          loadCity.codesPostaux = [];
          for (const codePostal of cityData[0].codesPostaux) {
            loadCity.codesPostaux.push(codePostal);
          }
          loadCity.departement = cityData[0].departement.nom + ' - ' + cityData[0].departement.code;
          loadCity.region = cityData[0].region.nom;

          this.city = loadCity;
          this.road = 'geo:' + this.city.latitude + ',' + this.city.longitude;

          this.map = Leaflet.map('mapId').setView([this.city.latitude, this.city.longitude], 10);
          Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'edupala.com © Angular LeafLet',
          }).addTo(this.map);

          Leaflet.marker([this.city.latitude, this.city.longitude]).addTo(this.map).bindPopup(
            '<h3>' + this.city.codesPostaux[0] + ' - ' + this.city.nom + '</h3>'
          );

        } else {
          this.map = Leaflet.map('mapId').setView([46.232192999999995, 2.209666999999996], 5);
          Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'edupala.com © Angular LeafLet',
          }).addTo(this.map);
        }
        this.dismissLoading();

      },
      (err) => {
        console.log(err);
      }
    );
  }


  /* loading */
  async presentLoading() {
    this.loading = await this.loadController.create({
      cssClass: 'my-custom-class',
      message: 'Veuillez patienter...'
    });
    await this.loading.present();
  }

  async dismissLoading() {
    this.loading.dismiss();
  }

  openInAppBrowser(url) {
    console.log(url);
    this.iab.create(url, '_blank', {
      location: 'no'
    });
  }


}
