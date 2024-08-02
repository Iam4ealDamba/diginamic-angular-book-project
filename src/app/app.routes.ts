import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookAddComponent } from './components/books/book-add/book-add.component';
import { EditBookComponent } from './components/books/book-edit/book-edit.component';
import { BookDetailComponent } from './components/books/book-detail/book-detail.component';
export const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'add', component: BookAddComponent },
  { path: 'edit/:id', component: EditBookComponent },
  { path: 'detail/:id', component: BookDetailComponent },
];
