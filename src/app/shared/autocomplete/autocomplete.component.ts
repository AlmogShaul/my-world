import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less']
})
export class AutocompleteComponent implements OnInit {

  @Input()
  searchField: string;
  @Input()
  items: any[];

  @Output()
  valueSelected: EventEmitter<any> = new EventEmitter<any>();
  myControl = new FormControl();
  filterItems: Observable<any>;

  constructor() {
    this.filterItems = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.items ? this.items.filter(option => option[this.searchField].toLowerCase().includes(filterValue)) : null;
  }

  ngOnInit(): void {
  }

}
