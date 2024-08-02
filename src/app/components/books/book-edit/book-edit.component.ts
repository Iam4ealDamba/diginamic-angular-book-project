import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BooksService } from '../../../services/books.service';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { BookInterface } from '../../../interfaces/book.interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'digi-book-edit',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, RouterModule],
  providers: [BooksService],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.scss',
})
export class EditBookComponent implements OnInit {
  bookForm = new FormGroup({
    title: new FormControl(''),
    auteur: new FormControl(''),
    description: new FormControl(''),
  });

  @Input() id!: string;
  books: Observable<BookInterface[]>;
  book: BookInterface | undefined;
  constructor(private bookService: BooksService, private router: Router) {
    this.books = this.bookService.one(this.id);
    this.books.subscribe((book) => {
      this.book = book[0];
    });
  }
  ngOnInit(): void {
    this.bookForm.setValue({
      title: this.book!.titre,
      auteur: this.book!.auteur,
      description: this.book!.description,
    });
  }

  edit() {
    if (
      this.bookForm.value.title &&
      this.bookForm.value.auteur &&
      this.bookForm.value.description
    ) {
      const updatedBook = {
        title: this.bookForm.value.title,
        auteur: this.bookForm.value.auteur,
        description: this.bookForm.value.description,
      };
      this.bookService.update(this.id, updatedBook);
      this.router.navigate(['/books']);
    }
  }
}
