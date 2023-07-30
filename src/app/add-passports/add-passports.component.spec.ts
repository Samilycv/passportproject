import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPassportsComponent } from './add-passports.component';

describe('AddPassportsComponent', () => {
  let component: AddPassportsComponent;
  let fixture: ComponentFixture<AddPassportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPassportsComponent]
    });
    fixture = TestBed.createComponent(AddPassportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
