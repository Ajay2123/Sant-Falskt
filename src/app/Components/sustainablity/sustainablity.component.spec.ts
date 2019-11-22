import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainablityComponent } from './sustainablity.component';

describe('SustainablityComponent', () => {
  let component: SustainablityComponent;
  let fixture: ComponentFixture<SustainablityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SustainablityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SustainablityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
