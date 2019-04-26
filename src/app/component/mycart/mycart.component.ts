import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../../shared/cart-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  private cartitems;
  private prod=[];
  private va=5;
  private owner
  private ee;
  constructor(private _cartservice:CartServiceService,private router:Router) { }

  ngOnInit() {
    this._cartservice.getcartitems().subscribe
    (data=>{
      console.log(data); 
      console.log('---------------------------------');
      this.cartitems=data;
      console.log(this.cartitems)
      this.displayingcart()//this._router.navigate([update]);
  
    },error=>{
  console.log("this is an error"+error);
    }
    )
  }
 
  displayingcart()
  {
    console.log('im in displaying cart')
     this.ee= window.localStorage.getItem('loguser');
console.log(8888888888888888+JSON.stringify(this.cartitems.msg))
    for(let i=0;i<this.cartitems.msg.length;i++)
    {console.log(this.cartitems.msg[i].User+"666666666666666"+this.ee)

      if(this.cartitems.msg[i].User==this.ee)
      {
        console.log("im in if")
        this.prod=this.cartitems.msg[i].prodata;
        this.owner=this.cartitems.msg[i];
        console.log(this.prod);
        break;
      }
    }

    for(let i=0;i<this.prod.length;i++)
    {
     for(let j=i+1;j<this.prod.length;)
     {
       if(this.prod[i]==this.prod[j])
       {
        this.prod[i].quantity++;
       
  this.prod.splice(j, 1);

       }
       else
       {
         j++;
       }
     }
    }
   this.totalpricecaluclation()
  }
  
totalpricecaluclation()
{
  let sum=0,sum1=0;
  for(let i=0;i<this.prod.length;i++)
  {
sum=sum+this.prod[i].totalPrice;
sum1=sum1+this.prod[i].quantity;
  }
  
this.cartitems.msg.totalPrice=sum;
this.owner.totalPrice=sum;
this.owner.totalQuantity=sum1;
}

  plus(pr)
  {
    pr.quantity++;
    
    var l=parseInt(pr.price);
    pr.totalPrice=l*pr.quantity;
   this.totalpricecaluclation()
   this.cartitems.msg.prodata=this.prod;
   this.owner.prodata=this.prod; this.owner.prodata=this.prod;
   console.log("20202020"+JSON.stringify(this.cartitems))

this._cartservice.updatecart(this.owner).subscribe(
  data=>{
    console.log(data+'-----------22222222--------'); 
    

  },error=>{
console.log("this is an error"+error);
  }

)


  }
  minus(pr)
  {
    pr.quantity=pr.quantity-1;
    var l=parseInt(pr.price);
    pr.totalPrice=l*pr.quantity;
    this.cartitems.msg.prodata=this.prod;
    this.owner.prodata=this.prod; this.owner.prodata=this.prod;
    console.log("20202020"+JSON.stringify(this.cartitems))
 
 this._cartservice.updatecart(this.owner).subscribe(
   data=>{
     console.log(data+'-----------22222222--------'); 
     
 
   },error=>{
 console.log("this is an error"+error);
   }
 
 )
  }
  checkout()
  {
    this.router.navigate(['address'])
    console.log('skdjhfksdhfskdfjksd');
    this._cartservice.checkingout(this.owner._id).subscribe(
      data=>{
        console.log(data+'-----------22222222--------'); 
        
    
      },error=>{
    console.log("this is an error"+error);
      })
  }
 
}
