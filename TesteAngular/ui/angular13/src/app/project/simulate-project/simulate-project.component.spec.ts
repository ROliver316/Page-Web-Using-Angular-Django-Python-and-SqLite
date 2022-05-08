import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateProjectComponent } from './simulate-project.component';

describe('SimulateProjectComponent', () => {
  let component: SimulateProjectComponent;
  let fixture: ComponentFixture<SimulateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulateProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
