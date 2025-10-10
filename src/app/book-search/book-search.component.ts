// book-search.component.ts
import { Component } from '@angular/core';
import { BookSearchService } from '../services/book-search.service';

@Component({
  selector: 'app-book-search',
  template: `
    <input [(ngModel)]="query" placeholder="Search book" />
    <button (click)="onSearch()">Search</button>

    <ul>
      <li *ngFor="let book of results">{{ book.title }}</li>
    </ul>
  `,
})
export class BookSearchComponent {
  query = '';
  results: any[] = [];

  constructor(private bookSearchService: BookSearchService) {}

  onSearch(): void {
    this.results = this.bookSearchService.searchBooks(this.query);
  }
}