import {Produit} from './produit';

export class RepsonseProduit {
  public page: number = null;
  public perPage: number = null;
  public total: number = null;
  public totalPages: number = null;
  public data: Produit[] = null;
}
