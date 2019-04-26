import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../../shared/cart-service.service';
import {Cart} from '../../shared/cart.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 public name:string="raju";
 private carts:Cart[];
  constructor(private _cartService:CartServiceService,private router:Router) { 
    _cartService.readcarts().subscribe(
      data =>
      {
        console.log(data);
        this.carts=data['msg'];
      },
      error =>
      {
        console.log(error);
      }
    )
  }
  // slides: any = [[]];
  // chunk(arr, chunkSize) {
  //   let R = [];
  //   for (let i = 0, len = arr.length; i < len; i += chunkSize) {
  //     R.push(arr.slice(i, i + chunkSize));
  //   }
  //   return R;
  // }
  // ngOnInit() {
  //   this.slides = this.chunk(this.carts, 3);
  // }
  
  ngOnInit() {
     }
}
