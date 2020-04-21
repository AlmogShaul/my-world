import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CoronaService} from './corona.service';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.less']
})
export class CoronaComponent implements OnInit {
  countries: Observable<any>;

  constructor(private coronaService: CoronaService) {
  }

  ngOnInit(): void {
    this.countries = this.coronaService.getCountries();
  }

}
