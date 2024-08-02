import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { BooksService } from '../../../services/books.service';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'digi-book-edit',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [BooksService, Router],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.scss',
})
export class EditBookComponent implements OnInit {
  bookForm = new FormGroup({
    titre: new FormControl('', Validators.required),
    auteur: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
  id: string = '';
  faArrowLeft = faArrowLeft;

  constructor(
    private bookService: BooksService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    const book = this.bookService.one(this.id);
    book.subscribe((book) => {
      this.bookForm.setValue({
        titre: book!.titre,
        auteur: book!.auteur,
        description: book!.description,
      });
    });
  }

  edit() {
    this.bookService
      .update(this.id, this.bookForm.getRawValue())
      .subscribe(() => {
        this.router.navigateByUrl('');
      });
  }
}
