import { Injectable } from '@angular/core';

export interface Book {
  book_id: number;
  title: string;
  author: string;
  inStock: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    { book_id: 1, title: 'Book 1', author: 'Author 1', inStock: true },
    { book_id: 2, title: 'Book 2', author: 'Author 2', inStock: false }
  ];

  getAllBooks(): Book[] {
    return this.books;
  }
}