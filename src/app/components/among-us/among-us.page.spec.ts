import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmongUsPage } from './among-us.page';

describe('AmongUsPage', () => {
  let component: AmongUsPage;
  let fixture: ComponentFixture<AmongUsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AmongUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
