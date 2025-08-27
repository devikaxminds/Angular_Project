import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
  isbn: string;
}

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') private searchInput!: ElementRef;

  searchTerm: string = '';
  filteredBooks: Book[] = [];
  
  books: Book[] = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', year: 1925, isbn: '978-0-7432-7356-5' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', year: 1960, isbn: '978-0-06-112008-4' },
    { id: 3, title: '1984', author: 'George Orwell', genre: 'Dystopian Fiction', year: 1949, isbn: '978-0-452-28423-4' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', year: 1813, isbn: '978-0-14-143951-8' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', year: 1951, isbn: '978-0-316-76948-0' },
    { id: 6, title: 'Lord of the Flies', author: 'William Golding', genre: 'Fiction', year: 1954, isbn: '978-0-571-05686-2' },
    { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', year: 1937, isbn: '978-0-547-92822-7' },
    { id: 8, title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy', year: 1997, isbn: '978-0-7475-3269-9' },
    { id: 9, title: 'The Da Vinci Code', author: 'Dan Brown', genre: 'Mystery', year: 2003, isbn: '978-0-385-50420-1' },
    { id: 10, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction', year: 1988, isbn: '978-0-06-231500-7' }
  ];

  ngOnInit(): void {
    // Initialize with all books during component initialization
    this.filteredBooks = [...this.books];
  }

  ngAfterViewInit(): void {
    // Only focus the input after view initialization
    this.focusSearchInput();
  }

  private focusSearchInput(): void {
    try {
      if (this.searchInput) {
        this.searchInput.nativeElement.focus();
        console.log('Search input focused successfully');
      }
    } catch (err) {
      console.error('Error focusing search input:', err);
    }
  }

  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredBooks = [...this.books];
      return;
    }

    const searchLower = this.searchTerm.toLowerCase();
    this.filteredBooks = this.books.filter(book =>
      book.title.toLowerCase().includes(searchLower) ||
      book.author.toLowerCase().includes(searchLower) ||
      book.genre.toLowerCase().includes(searchLower) ||
      book.year.toString().includes(searchLower)
    );
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.filteredBooks = [...this.books];
    this.focusSearchInput();
  }

  onSearchInputChange(): void {
    // Real-time search as user types
    this.onSearch();
  }
}
