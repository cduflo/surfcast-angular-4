import { SpotDetailResolver } from './spot-detail-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SpotComponent } from './spot/spot.component';
import { CountyComponent } from './county/county.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'county/:name', component: CountyComponent },
  { path: 'spot/:id',
    component: SpotComponent,
    resolve: {
      spot: SpotDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SpotDetailResolver]
})
export class AppRoutingModule { }
