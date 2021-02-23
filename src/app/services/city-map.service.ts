import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {City} from '../modeles/city';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityMapService {

  constructor(private httpClient: HttpClient) {
  }

  private apiBaseUrl = 'https://geo.api.gouv.fr/communes?codePostal=';

  // Http Options
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  // Handle API errors
  private static handleError(error: HttpErrorResponse) {
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

  getCityInfo(postalCode: number): Observable<City> {
   // console.log(this.apiBaseUrl + postalCode + '&fields=code,nom,centre,region,departement,population,surface,codesPostaux&limit=1');
    return this.httpClient.get<City>(
      this.apiBaseUrl + postalCode + '&fields=code,nom,centre,region,departement,population,surface,codesPostaux&limit=1',
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(CityMapService.handleError)
      );
  }
}
