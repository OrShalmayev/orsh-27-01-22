import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesTypeheadComponent } from './cities-typehead.component';

describe('CitiesTypeheadComponent', () => {
  let component: CitiesTypeheadComponent;
  let fixture: ComponentFixture<CitiesTypeheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesTypeheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesTypeheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
