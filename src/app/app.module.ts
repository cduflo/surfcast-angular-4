import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatSelectModule, MatFormFieldModule, MatTableModule, MatGridListModule } from '@angular/material';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpotComponent } from './spot/spot.component';

import { spotReducer } from './reducers/spot.reducer';
import { SpotEffects } from './effects/spot.effects';
import { CountyFilterPipe } from './pipes/county-filter.pipe';

import { ForecastServiceService } from './services/forecast-service.service';

import {ChartModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SpotComponent,
    CountyFilterPipe
  ],
  imports: [
    ChartModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatGridListModule,
    StoreModule.forRoot({ spot: spotReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    EffectsModule.forRoot([SpotEffects]),
  ],
  providers: [ForecastServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
