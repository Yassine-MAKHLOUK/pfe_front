import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBarberComponent } from './dashboard-barber.component';

describe('DashboardBarberComponent', () => {
  let component: DashboardBarberComponent;
  let fixture: ComponentFixture<DashboardBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardBarberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
