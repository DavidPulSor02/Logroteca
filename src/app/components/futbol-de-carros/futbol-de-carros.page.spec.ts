import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FutbolDeCarrosPage } from './futbol-de-carros.page';

describe('FutbolDeCarrosPage', () => {
  let component: FutbolDeCarrosPage;
  let fixture: ComponentFixture<FutbolDeCarrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FutbolDeCarrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
