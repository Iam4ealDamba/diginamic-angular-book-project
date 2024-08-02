import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookInterface } from '../../../interfaces/book.interface';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'digi-book-detail',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, HttpClientModule],
  providers: [BooksService],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss',
})
export class BookDetailComponent implements OnInit {
  id: string = '';
  faArrowLeft = faArrowLeft;
  book: BookInterface | undefined;

  constructor(
    private bookService: BooksService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.bookService.one(this.id).subscribe((book) => {
      this.book = book;
    });
  }
}
