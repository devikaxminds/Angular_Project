import { TestBed } from '@angular/core/testing';

import { BookSearchCacheService } from './book-search-cache.service';

describe('BookSearchCacheService', () => {
  let service: BookSearchCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookSearchCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
