import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDrinksComponent } from './random-drinks.component';

describe('RandomDrinksComponent', () => {
  let component: RandomDrinksComponent;
  let fixture: ComponentFixture<RandomDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomDrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
