import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-book-selector',
  templateUrl: './book-selector.component.html',
  styleUrl: './book-selector.component.css'
})
export class BookSelectorComponent {
  @Output() bookSelected = new EventEmitter<string>();

  books: string[] = ['Harry Potter', 'The Hobbit', 'Sherlock Holmes', 'Pride and Prejudice'];

  onBookChange(event: Event) {
    const selectedBook = (event.target as HTMLSelectElement).value;
    this.bookSelected.emit(selectedBook); // send to parent
  }

}
