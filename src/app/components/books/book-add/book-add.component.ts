import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

import { BooksService } from '../../../services/books.service';
@Component({
  selector: 'digi-book-add',
  standalone: true,
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
  ],
  providers: [BooksService, Router],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.scss',
})
export class BookAddComponent {
  form = new FormGroup({
    titre: new FormControl(''),
    auteur: new FormControl(''),
    description: new FormControl(''),
  });

  faArrowLeft = faArrowLeft;

  constructor(private bookService: BooksService, private router: Router) {}

  addBook() {
    if (
      this.form.value.titre &&
      this.form.value.auteur &&
      this.form.value.description
    ) {
      const newBook = {
        titre: this.form.value.titre,
        auteur: this.form.value.auteur,
        description: this.form.value.description,
      };

      this.bookService.add(newBook);

      this.form.value.auteur = '';
      this.form.value.titre = '';
      this.form.value.description = '';

      this.router.navigate(['/books']);
    }
  }
}
