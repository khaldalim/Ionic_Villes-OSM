import {Component, OnInit, OnDestroy} from '@angular/core';
import * as Leaflet from 'leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import {CityMapService} from '../../../services/city-map.service';
import {ActivatedRoute} from '@angular/router';
import {City} from '../../../modeles/city';


@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.page.html',
  styleUrls: ['./city-info.page.scss'],
})
export class CityInfoPage implements OnInit, OnDestroy {

  map: Leaflet.Map;
  city: City;

  constructor(private cityMapService: CityMapService, private acR: ActivatedRoute) {
  }

  ngOnInit() {
    this.city = new City();

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
        loadCity.nom = cityData[0].nom;
        loadCity.longitude = cityData[0].centre.coordinates[0];
        loadCity.latitude = cityData[0].centre.coordinates[1];
        loadCity.population = cityData[0].population;
        loadCity.surface = cityData[0].surface;
        loadCity.codesPostaux = [];
        for (const codePostal of cityData[0].codesPostaux) {
          loadCity.codesPostaux.push(codePostal);
        }
        loadCity.departement = cityData[0].departement.nom;
        loadCity.region = cityData[0].region.nom;

        this.city = loadCity;

        this.map = Leaflet.map('mapId').setView([this.city.latitude, this.city.longitude], 10);
        Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'edupala.com © Angular LeafLet',
        }).addTo(this.map);

        Leaflet.marker([this.city.latitude, this.city.longitude]).addTo(this.map).bindPopup(
          '<h3>' + this.city.codesPostaux + ' - ' + this.city.nom + '</h3>'
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
