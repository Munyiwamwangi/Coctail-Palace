import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDrinkComponent } from './custom-drink.component';

describe('CustomDrinkComponent', () => {
  let component: CustomDrinkComponent;
  let fixture: ComponentFixture<CustomDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
