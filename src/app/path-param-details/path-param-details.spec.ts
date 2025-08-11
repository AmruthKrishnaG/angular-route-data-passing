import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathParamDetails } from './path-param-details';

describe('PathParamDetails', () => {
  let component: PathParamDetails;
  let fixture: ComponentFixture<PathParamDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathParamDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathParamDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
