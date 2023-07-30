import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportManagerComponent } from './passport-manager.component';

describe('PassportManagerComponent', () => {
  let component: PassportManagerComponent;
  let fixture: ComponentFixture<PassportManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassportManagerComponent]
    });
    fixture = TestBed.createComponent(PassportManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
