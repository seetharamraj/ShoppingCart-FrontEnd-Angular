import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../../shared/cart-service.service';
import {Cart} from '../../shared/cart.service';
import {Router} from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
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
   logout()
   {
     alert('are you sure you want to log out');
     this.router.navigate(['/navbar']);
   }
   addCart(msg)
  {
    const index = this.carts.indexOf(msg);
  

    console.log(this.carts[index]);
 
  var ee= window.localStorage.getItem('loguser');
    this._cartService.addtocart(msg,ee).subscribe(
   data=> {
console.log("success"+JSON.stringify(data));
alert("product added to cart sucessfully");
      },
      error=>{
console.log("error------ in r c"+error);
      }
    );
    
  }

  ngOnInit() {
  }

}
