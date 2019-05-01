import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDeleteDataComponent } from './display-delete-data.component';

describe('DisplayDeleteDataComponent', () => {
  let component: DisplayDeleteDataComponent;
  let fixture: ComponentFixture<DisplayDeleteDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDeleteDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDeleteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
