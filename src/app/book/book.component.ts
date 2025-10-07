import { Component } from '@angular/core';

interface Book {
  book_id: number;
  title: string;
  author: string;
  inStock: boolean;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  books: Book[] = [
    { book_id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', inStock: true },
    { book_id: 2, title: '1984', author: 'George Orwell', inStock: false },
    { book_id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', inStock: true },
    { book_id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', inStock: false },
    { book_id: 5, title: 'The Hobbit', author: 'J.R.R. Tolkien', inStock: true }
  ];
}
