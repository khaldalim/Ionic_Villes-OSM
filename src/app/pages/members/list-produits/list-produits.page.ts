import {Component, OnInit} from '@angular/core';
import {ProduitService} from '../../../services/produit.service';
import {Produit} from '../../../modeles/produit';
import {RepsonseProduit} from '../../../modeles/repsonse-produit';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.page.html',
  styleUrls: ['./list-produits.page.scss'],
})
export class ListProduitsPage {

  listProduit: Produit[];

  constructor(private produitService: ProduitService) {
  }
  ionViewWillEnter() {
    this.listProduit = [];
    this.loadProduits();
  }

  loadProduits(){
    this.produitService.getAll().subscribe(
      (res: any) => {
          res.data.forEach((v: any, k) => {
            console.log(v) ;
            const p = new Produit() ;
            p.id = v.id ;
            p.name = v.name ;
            p.color = v.color ;
            p.pantoneValue = v.pantone_value ;
            this.listProduit.push(p) ;
          }) ;
      },
    (err) => {
        console.log(err) ;
    }
  ) ;
  }

}
