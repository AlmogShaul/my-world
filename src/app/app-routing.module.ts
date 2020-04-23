import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoronaComponent} from './corona/corona.component';
import {MeComponent} from './me/me.component';


const routes: Routes = [
  {path: '', redirectTo: 'me', pathMatch: 'full'},
  {path: 'me', component: MeComponent},
  {path: 'corona', component: CoronaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
