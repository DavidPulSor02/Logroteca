import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarlosDutyPage } from './carlos-duty.page';

describe('CarlosDutyPage', () => {
  let component: CarlosDutyPage;
  let fixture: ComponentFixture<CarlosDutyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarlosDutyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
