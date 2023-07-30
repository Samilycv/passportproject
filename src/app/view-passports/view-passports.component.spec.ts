import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPassportsComponent } from './view-passports.component';

describe('ViewPassportsComponent', () => {
  let component: ViewPassportsComponent;
  let fixture: ComponentFixture<ViewPassportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPassportsComponent]
    });
    fixture = TestBed.createComponent(ViewPassportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
