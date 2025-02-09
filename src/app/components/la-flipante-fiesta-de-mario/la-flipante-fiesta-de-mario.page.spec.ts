import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaFlipanteFiestaDeMarioPage } from './la-flipante-fiesta-de-mario.page';

describe('LaFlipanteFiestaDeMarioPage', () => {
  let component: LaFlipanteFiestaDeMarioPage;
  let fixture: ComponentFixture<LaFlipanteFiestaDeMarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LaFlipanteFiestaDeMarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
