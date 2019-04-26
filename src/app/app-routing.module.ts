import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BooksComponent } from './component/books/books.component';
import { ProductsComponent } from './products/products.component';
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

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'books',component:BooksComponent},
  {path:'products',component:ProductsComponent},
  {path:'createBook',component:CreateBookComponent},
  {path:'createMobile',component:CreateMobileComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'mobile',component:MobileComponent},
  {path:'users',component:UsersComponent},
  {path:'admin',component:AdminComponent},
  {path:'viewbook',component:ViewbookComponent},
  {path:'home',component:HomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'delbook',component:DelbookComponent},
  {path:'user-navbar',component:UserNavbarComponent},
  {path:'admin-navbar',component:AdminNavbarComponent},
  {path:'mycart',component:MycartComponent},
  {path:'address',component:AddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
