// book-search-cache.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookSearchCacheService {
  private cache = new Map<string, any[]>();

  getCachedResult(query: string): any[] | undefined {
    return this.cache.get(query);
  }

  setCachedResult(query: string, result: any[]): void {
    this.cache.set(query, result);
  }
}