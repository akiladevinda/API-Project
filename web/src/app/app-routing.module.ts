import { LoginComponent } from './login/login.component';
import { AddBookAdminComponent } from './add-book-admin/add-book-admin.component';
import { MemberRequestComponent } from './member-request/member-request.component';

import { OlaComponent } from './ola/ola.component';
import { GovernmentComponent } from './government/government.component';
import { NewspapersComponent } from './newspapers/newspapers.component';
import { BooksComponent } from './books/books.component';
import { RecentAddedComponent } from './recent-added/recent-added.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [


  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'app-recent-added', component: RecentAddedComponent },
  { path: 'app-books', component: BooksComponent },
  { path: 'app-newspapers', component: NewspapersComponent},
  { path: 'app-government', component: GovernmentComponent },
  { path: 'app-ola', component: OlaComponent },
  { path: 'app-books', component: BooksComponent },
  { path: 'app-add-book-admin', component: AddBookAdminComponent },
  { path: 'app-member-request', component: MemberRequestComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
