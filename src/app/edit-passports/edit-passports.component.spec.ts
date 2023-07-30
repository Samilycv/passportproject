import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPassportsComponent } from './edit-passports.component';

describe('EditPassportsComponent', () => {
  let component: EditPassportsComponent;
  let fixture: ComponentFixture<EditPassportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPassportsComponent]
    });
    fixture = TestBed.createComponent(EditPassportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
