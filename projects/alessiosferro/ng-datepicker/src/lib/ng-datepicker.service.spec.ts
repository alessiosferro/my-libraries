import { TestBed } from '@angular/core/testing';

import { NgDatepickerService } from './ng-datepicker.service';

describe('NgDatepickerService', () => {
  let service: NgDatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
