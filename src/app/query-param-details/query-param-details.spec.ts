import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParamDetails } from './query-param-details';

describe('QueryParamDetails', () => {
  let component: QueryParamDetails;
  let fixture: ComponentFixture<QueryParamDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryParamDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryParamDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
