import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatSelectModule, MatFormFieldModule, MatTableModule, MatGridListModule } from '@angular/material';
import { CountyFilterPipe } from '../pipes/county-filter.pipe';
import { StoreModule } from '@ngrx/store';
import { ForecastServiceService } from '../services/forecast-service.service';
import { HttpClientModule } from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

import { spotReducer } from '../reducers/spot.reducer';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatCardModule,
        MatSelectModule,
        MatFormFieldModule,
        MatTableModule,
        MatGridListModule,
        HttpClientModule,
        RouterTestingModule,
        StoreModule.forRoot({ spot: spotReducer })
      ],
      declarations: [ DashboardComponent, CountyFilterPipe],
      providers: [ForecastServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
