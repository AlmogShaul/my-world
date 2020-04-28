import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CountryDto} from './dtos/country';
import {DayStatusDto} from './dtos/day-status';

const CORONA_API = 'https://api.covid19api.com';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private httpClient: HttpClient) {
  }

  getCountries(): Observable<CountryDto[]> {
    return this.httpClient.get<CountryDto[]>(CORONA_API + '/countries');
  }

  getCountryData(countryCode): Observable<DayStatusDto[]> {
    return this.httpClient.get<DayStatusDto[]>(CORONA_API + `/dayone/country/${countryCode}`);
  }
}
