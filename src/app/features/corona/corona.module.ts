import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoronaComponent} from './corona.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {ChartsModule} from 'ng2-charts';
import {SharedModule} from '../../shared/shared.module';
import {CoronaService} from './corona.service';


@NgModule({
  declarations: [CoronaComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [CoronaService],
  exports: [CoronaComponent]
})
export class CoronaModule {
}

