import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcsComponent } from './calcs.component';

describe('CalcsComponent', () => {
  let component: CalcsComponent;
  let fixture: ComponentFixture<CalcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
