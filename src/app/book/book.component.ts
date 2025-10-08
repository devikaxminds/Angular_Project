import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

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
export class BookComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getAllBooks();
  }
}