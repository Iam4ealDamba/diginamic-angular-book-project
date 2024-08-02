import { Component, OnInit } from '@angular/core';
import { BookInterface } from '../../interfaces/book.interface';
import { BooksService } from '../../services/books.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'digi-book-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  providers: [BooksService, Router],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  books: Observable<BookInterface[]>;

  constructor(private bookService: BooksService, private router: Router) {
    this.books = this.bookService.all();
  }

  ngOnInit() {
    this.books = this.bookService.all();
  }

  deleteBook(id: string) {
    this.bookService.delete(id).subscribe(() => {
      this.books = this.bookService.all();
    });
  }

  updateStatusBook(id: string) {
    this.bookService.one(id).subscribe((book) => {
      this.bookService.updateStatus(book).subscribe(() => {
        this.books = this.bookService.all();
      });
    });
  }
}
