import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCustomComponent } from './display-custom.component';

describe('DisplayCustomComponent', () => {
  let component: DisplayCustomComponent;
  let fixture: ComponentFixture<DisplayCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
