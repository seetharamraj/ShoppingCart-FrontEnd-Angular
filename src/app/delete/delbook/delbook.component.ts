import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../../shared/cart-service.service';
import {Cart} from '../../shared/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delbook',
  templateUrl: './delbook.component.html',
  styleUrls: ['./delbook.component.css']
})
export class DelbookComponent implements OnInit {
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
   delete(cart)
   {
    
      this._cartService.deleteCart(cart._id).subscribe(
        data=>
        {
          this.carts.splice(this.carts.indexOf(cart),1);
  
        },
        error=>
        {
          
        }
      )
    
   }

  ngOnInit() {
  }

}
