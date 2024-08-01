import { Component, OnInit } from '@angular/core';
import { BookInterface } from '../../interfaces/book.interface';
import { BooksService } from '../../services/books.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'digi-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent  implements OnInit {

  books: BookInterface[] = [];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.bookService.all().subscribe((books) => {
      this.books = books;
    });
  }
  deleteBook(id: string) {
    this.bookService.delete(id).subscribe(() => {
      this.books = this.books.filter((book) => book.id !== id);
    });
  }

}
