import { Component, OnInit } from '@angular/core';
import { BookInterface } from '../../interfaces/book.interface';
import { BooksService } from '../../services/books.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'digi-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  books: Observable<BookInterface[]>;

  constructor(private bookService: BooksService) {
    this.books = this.bookService.all();
  }

  ngOnInit(): void {
    this.books = this.bookService.all();
  }
  deleteBook(id: string) {
    this.bookService.delete(id).subscribe(() => {
      this.books = this.bookService.all();
    });
  }
}
