import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const CORONA_API = 'https://api.covid19api.com/';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private httpClient: HttpClient) {
  }

  getCountries(): Observable<any> {
    return this.httpClient.get(CORONA_API + '/countries');
  }
  getCountryData(country): Observable<any> {
    return this.httpClient.get(CORONA_API + `/dayone/${country}/israel`);
  }
}
