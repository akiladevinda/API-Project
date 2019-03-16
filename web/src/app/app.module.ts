
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import {MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule,
  MatInputModule, MatTabsModule, MatAutocompleteModule,
  MatChipsModule, MatDatepickerModule, MatNativeDateModule,
  MatListModule, MatProgressBarModule,
  MatIconModule, MatOptionModule, MatSelectModule, MatSnackBarModule,
  MatExpansionModule, MatStepperModule, MatTableModule, MatToolbarModule, } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RecentAddedComponent } from './recent-added/recent-added.component';
import { BooksComponent } from './books/books.component';
import { NewspapersComponent } from './newspapers/newspapers.component';
import { GovernmentComponent } from './government/government.component';
import { OlaComponent } from './ola/ola.component';

import { MemberRequestComponent } from './member-request/member-request.component';
import { AddBookAdminComponent } from './add-book-admin/add-book-admin.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToolbarComponent,
    RecentAddedComponent,
    BooksComponent,
    NewspapersComponent,
    GovernmentComponent,
    OlaComponent,
    MemberRequestComponent,
    AddBookAdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, BrowserAnimationsModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatTabsModule, MatSidenavModule,
    MatChipsModule, MatDatepickerModule, MatNativeDateModule,
    MatListModule, MatProgressBarModule, MatAutocompleteModule,
    MatIconModule, MatOptionModule, MatSelectModule, MatSnackBarModule, MatToolbarModule,
    MatExpansionModule, MatStepperModule, MatTableModule, FormsModule, ReactiveFormsModule,
    HttpClientModule, MatListModule, MatMenuModule
  ],

  exports: [AppRoutingModule,
    BrowserModule, MatButtonModule, MatCheckboxModule, BrowserAnimationsModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatTabsModule, MatAutocompleteModule, MatSidenavModule,
    MatChipsModule, MatDatepickerModule, MatNativeDateModule,
    MatListModule, MatProgressBarModule, MatToolbarModule,
    MatIconModule, MatOptionModule, MatSelectModule, MatSnackBarModule,
    MatExpansionModule, MatStepperModule, MatTableModule,
    HttpClientModule, MatListModule, MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
