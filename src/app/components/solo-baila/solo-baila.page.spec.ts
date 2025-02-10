import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoloBailaPage } from './solo-baila.page';

describe('SoloBailaPage', () => {
  let component: SoloBailaPage;
  let fixture: ComponentFixture<SoloBailaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloBailaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
