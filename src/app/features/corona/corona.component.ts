import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CoronaService} from './corona.service';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.less']
})
export class CoronaComponent implements OnInit {
  countries: any[];
  filterCountries: Observable<any[]>;
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.3)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,255,0.3)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(60,0,100,0.3)',
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  private selectedCountry: any;
  countryDays: any[];

  constructor(private coronaService: CoronaService) {

  }

  ngOnInit(): void {


    this.coronaService.getCountries().subscribe(result => {
      this.countries = result;
    });

  }


  countrySelected(selectedEvent: MatAutocompleteSelectedEvent) {
    this.selectedCountry = this.countries.find(c => c.Country === selectedEvent.option.value);
    this.coronaService.getCountryData(this.selectedCountry.ISO2).subscribe(result => {
      this.countryDays = result.map((day: any) => {
        return {
          confirmed: day.Confirmed,
          deaths: day.Deaths,
          recovered: day.Recovered,
          active: day.Active,
          date: new Date(day.Date)
        };
      });
      this.lineChartLabels = this.countryDays.map(d => d.date.getMonth() + 1 + '/' + d.date.getDate());
      this.lineChartData = this.buildChartData();
    });
  }

  private buildChartData() {
    return [
      {data: this.countryDays.map(d => d.confirmed), label: 'Confirmed'},
      {data: this.countryDays.map(d => d.deaths), label: 'Deaths'},
      {data: this.countryDays.map(d => d.recovered), label: 'Recovered'},
      {data: this.countryDays.map(d => d.active), label: 'Active'},
    ];
  }
}