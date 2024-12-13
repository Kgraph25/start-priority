import { TestBed } from '@angular/core/testing';

import { PrioritySelectionService } from './priority-selection.service';

describe('PrioritySelectionService', () => {
  let service: PrioritySelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrioritySelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
