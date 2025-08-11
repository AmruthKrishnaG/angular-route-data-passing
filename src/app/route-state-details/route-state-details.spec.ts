import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteStateDetails } from './route-state-details';

describe('RouteStateDetails', () => {
  let component: RouteStateDetails;
  let fixture: ComponentFixture<RouteStateDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteStateDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteStateDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
