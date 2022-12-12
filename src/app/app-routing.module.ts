import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'routing', loadChildren: () => import('./calcs/calcs.module').then(m => m.CalcsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  routes: Routes = [
    { path: 'a', loadChildren: () => import('./calcs/calcs.module').then(m => m.CalcsModule) },
  
  ];

}
