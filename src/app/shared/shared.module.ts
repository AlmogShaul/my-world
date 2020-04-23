import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AutocompleteComponent} from './autocomplete/autocomplete.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [AutocompleteComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AutocompleteComponent]
})
export class SharedModule {
}
