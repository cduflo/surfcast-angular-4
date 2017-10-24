import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatSelectModule, MatFormFieldModule, MatTableModule, MatGridListModule } from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

import { SpotComponent } from './spot.component';

describe('SpotComponent', () => {
  let component: SpotComponent;
  let fixture: ComponentFixture<SpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatSelectModule,
        MatFormFieldModule,
        MatTableModule,
        MatGridListModule,
        RouterTestingModule
      ],
      declarations: [ SpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
