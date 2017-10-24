import { SpotEffects } from './effects/spot.effects';
// import { SpotActions } from './actions/spotAction';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule, MatSelectModule, MatFormFieldModule, MatTableModule, MatGridListModule } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountyComponent } from './county/county.component';
import { SpotComponent } from './spot/spot.component';

import { StoreModule } from '@ngrx/store';
import { spotReducer } from './reducers/spot.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { ForecastServiceService } from './../services/forecast-service.service';
import { CountyFilterPipe } from './county-filter.pipe';

// import { spot } from './reducers/spot';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountyComponent,
    SpotComponent,
    CountyFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    JsonpModule,
    // HttpModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatGridListModule,
    CdkTableModule,
    // StoreModule,
    StoreModule.forRoot({ spot: spotReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 10 // number of states to retain
    }),
    EffectsModule.forRoot([SpotEffects]),
  ],
  providers: [ForecastServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
