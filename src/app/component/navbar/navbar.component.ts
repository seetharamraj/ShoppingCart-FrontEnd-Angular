import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../../shared/cart-service.service';
import {Cart} from '../../shared/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private _cartService:CartServiceService,private router:Router) { }

  ngOnInit() {
  }
 
  

}
