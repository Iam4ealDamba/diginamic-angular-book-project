import { Component, OnInit } from '@angular/core';
import { BookInterface } from '../../interfaces/book.interface';
import { BooksService } from '../../services/books.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'digi-book-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
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

  editBook(id: string) {
    this.router.navigate(['/edit/', id]);
  }

  deleteBook(id: string) {
    this.bookService.delete(id).subscribe(() => {
      this.books = this.bookService.all();
    });
  }
}
