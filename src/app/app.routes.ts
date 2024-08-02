import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookAddComponent } from './components/books/book-add/book-add.component';
import { BookEditComponent } from './components/books/book-edit/book-edit.component';
export const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'add', component: BookAddComponent },
  { path: 'edit/:id', component: BookEditComponent},
 // { path: 'detail/:id', component: BookDetailComponent },
];
