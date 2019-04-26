import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {CartServiceService} from '../../src/app/shared/cart-service.service';
import { BooksComponent } from './component/books/books.component';
import { CreateBookComponent } from './create/create-book/create-book.component';
import { CreateMobileComponent } from './create/create-mobile/create-mobile.component';
import { SignupComponent } from './component/signup/signup.component';
import { SigninComponent } from './component/signin/signin.component';
import { MobileComponent } from './component/mobile/mobile.component';
import { UsersComponent } from './component/users/users.component';
import { AdminComponent } from './component/admin/admin.component';
import { ViewbookComponent } from './addcart/viewbook/viewbook.component';
import { HomeComponent } from './component/home/home.component';
import { DelbookComponent } from './delete/delbook/delbook.component';
import { UserNavbarComponent } from './component/user-navbar/user-navbar.component';
import { AdminNavbarComponent } from './component/admin-navbar/admin-navbar.component';
import { MycartComponent } from './component/mycart/mycart.component';
import { AddressComponent } from './component/address/address.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    BooksComponent,
    CreateBookComponent,
    CreateMobileComponent,
    SignupComponent,
    SigninComponent,
    MobileComponent,
    UsersComponent,
    AdminComponent,
    ViewbookComponent,
    HomeComponent,
    DelbookComponent,
    UserNavbarComponent,
    AdminNavbarComponent,
    MycartComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [CartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
