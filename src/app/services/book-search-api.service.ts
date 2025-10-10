import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookSearchApiService {
  private books = [
    { id: 1, title: 'Harry Potter and the Sorcerer\'s Stone' },
    { id: 2, title: 'The Lord of the Rings' },
    { id: 3, title: 'The Hobbit' },
    { id: 4, title: 'To Kill a Mockingbird' },
  ];

  search(query: string): any[] {
    const q = query.toLowerCase();
    return this.books.filter(book =>
      book.title.toLowerCase().includes(q)
    );
  }
}