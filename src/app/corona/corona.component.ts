import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CoronaService} from './corona.service';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.less']
})
export class CoronaComponent implements OnInit {
  countries: any[];
  filterCountries: Observable<any[]>;
  myControl = new FormControl();

  constructor(private coronaService: CoronaService) {
  }

  ngOnInit(): void {
    this.coronaService.getCountries().subscribe(result => {
      this.countries = result;
    });
    this.filterCountries = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countries ? this.countries.filter(option => option.Country.toLowerCase().includes(filterValue)) : null;
  }

  countrySelected(selectedEvent: MatAutocompleteSelectedEvent) {
    console.log(selectedEvent);
  }
}
