import { TestBed } from '@angular/core/testing';

import { BookSearchApiService } from './book-search-api.service';

describe('BookSearchApiService', () => {
  let service: BookSearchApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookSearchApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
