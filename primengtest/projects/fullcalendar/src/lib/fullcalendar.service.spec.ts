import { TestBed } from '@angular/core/testing';

import { FullcalendarService } from './fullcalendar.service';

describe('FullcalendarService', () => {
  let service: FullcalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullcalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
