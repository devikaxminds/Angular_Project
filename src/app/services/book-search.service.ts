// book-search.service.ts
import { Injectable } from '@angular/core';
import { BookSearchApiService } from './book-search-api.service';
import { BookSearchCacheService } from './book-search-cache.service';

@Injectable({
  providedIn: 'root',
})
export class BookSearchService {
  constructor(
    private apiService: BookSearchApiService,
    private cacheService: BookSearchCacheService
  ) {}

  searchBooks(query: string): any[] {
    const cached = this.cacheService.getCachedResult(query);
    if (cached) {
      console.log('Returning from cache:', query);
      return cached;
    }

    const result = this.apiService.search(query);
    this.cacheService.setCachedResult(query, result);
    console.log('Returning from API:', query);
    return result;
  }
}