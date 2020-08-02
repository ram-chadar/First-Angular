import { TestBed } from '@angular/core/testing';

import { ColageListService } from './colage-list.service';

describe('ColageListService', () => {
  let service: ColageListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColageListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
