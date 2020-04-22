import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CoronaComponent } from './corona/corona.component';
import {CoronaService} from './corona/corona.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {ChartsModule} from 'ng2-charts';
import { MeComponent } from './me/me.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CoronaComponent,
    MeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatAutocompleteModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    LeafletModule.forRoot(),
    ChartsModule
  ],
  providers: [CoronaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
