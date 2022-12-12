import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcsRoutingModule } from './calcs-routing.module';
import { CalcsComponent } from './calcs.component';


@NgModule({
  declarations: [
    CalcsComponent
  ],
  imports: [
    CommonModule,
    CalcsRoutingModule
  ]
})
export class CalcsModule { }
