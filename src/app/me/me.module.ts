import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeComponent} from './me.component';



@NgModule({
  declarations: [MeComponent],
  imports: [
    CommonModule
  ],
  exports:[MeComponent]

})
export class MeModule { }
