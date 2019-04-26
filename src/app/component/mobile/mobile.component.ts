import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CartServiceService} from '../../shared/cart-service.service';
import {Mobile} from '../../shared/mobile.service';
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  private mobiles:Mobile[];

  constructor(private _cartService:CartServiceService,private router:Router) {
    _cartService.readMobiles().subscribe(
      data =>
      {
        console.log(data);
        this.mobiles=data['msg'];
      },
      error =>
      {
        console.log(error);
      }
    )
  }

   }




