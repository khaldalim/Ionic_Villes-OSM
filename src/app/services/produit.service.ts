import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Produit} from '../modeles/produit';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {RepsonseProduit} from '../modeles/repsonse-produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  private apiBaseUrl = 'https://reqres.in/api/products';

  // Http Options
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<RepsonseProduit>{
    return this.httpClient.get<RepsonseProduit>(this.apiBaseUrl, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


// Handle API errors
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
