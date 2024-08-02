import { Component, inject, Input, OnInit } from '@angular/core';
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
    titre: new FormControl(''),
    auteur: new FormControl(''),
    description: new FormControl(''),
  });
  id: string = '';
  book: Observable<BookInterface>;

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  constructor(private bookService: BooksService, private router: Router) {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.book = this.bookService.one(this.id);
  }
  ngOnInit(): void {
    this.book.subscribe((book) => {
      this.bookForm.setValue({
        titre: book!.titre,
        auteur: book!.auteur,
        description: book!.description,
      });
    });
  }

  edit() {
    if (
      this.bookForm.value.titre &&
      this.bookForm.value.auteur &&
      this.bookForm.value.description
    ) {
      const updatedBook = {
        titre: this.bookForm.value.titre,
        auteur: this.bookForm.value.auteur,
        description: this.bookForm.value.description,
      };
      this.bookService.update(this.id, updatedBook);
      this.router.navigate(['/books']);
    }
  }
}
