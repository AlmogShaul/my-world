import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompaniesComponent} from './companies/companies.component';
import {CoronaComponent} from './corona/corona.component';


const routes: Routes = [
  { path: 'companies', component: CompaniesComponent },
  { path: 'corona', component: CoronaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
