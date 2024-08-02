import { BookInterface } from './../interfaces/book.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  url: string = 'http://localhost:3000/books';

  /**
   *
   */
  constructor(private http: HttpClient) {}

  /** Get all books */
  public all() {
    return this.http.get<BookInterface[]>(this.url);
  }

  /** Get one book
   *
   * @param {string} id - id of the book
   */
  public one(id: string): Observable<BookInterface> {
    return this.http.get<BookInterface>(this.url + '/' + id);
  }

  /** Add a new book
   * @param {Object} book - {titre, auteur, description} required
   */
  public add(book: { titre: string|null; auteur: string|null; description: string|null }) {
    const newBook = {
      titre: book.titre,
      auteur: book.auteur,
      description: book.description,
      statut: true,
    };

    return this.http.post<BookInterface[]>(this.url, newBook);
  }
  public update(
    id: string,
    book: {
      titre: string | null;
      auteur: string | null;
      description: string | null;
    }
  ) {
    console.log(book);

    const newBook = {
      id: id,
      titre: book.titre,
      auteur: book.auteur,
      description: book.description,
      statut: false,
    };

    return this.http.put<BookInterface[]>(this.url + '/' + id, newBook);
  }

  public updateStatus(book: BookInterface) {
    book.statut = !book.statut;
    return this.http.put<BookInterface[]>(this.url + '/' + book.id, book);
  }
  public delete(id: string) {
    return this.http.delete<BookInterface[]>(this.url + '/' + id);
  }
}
