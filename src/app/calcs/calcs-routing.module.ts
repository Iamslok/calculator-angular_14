import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcsComponent } from './calcs.component';

const routes: Routes = [{ path: '', component: CalcsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcsRoutingModule { }
