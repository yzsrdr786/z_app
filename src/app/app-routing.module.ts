// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
      path: 'overview', 
      loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule)
  },
  { 
      path: '', 
      redirectTo: 'overview', pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
