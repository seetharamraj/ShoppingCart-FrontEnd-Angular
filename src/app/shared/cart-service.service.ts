import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Cart} from '../shared/cart.service';
import {Mobile} from '../shared/mobile.service';
import { from } from 'rxjs';
import { Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cart:Cart;
  model:any={};
  private baseUri:string="http://localhost:7000";
  private headers = new HttpHeaders().set('Content-Type','application/json');


  constructor(private http:HttpClient) { }
  register(email:any,username:any,password:any){
    console.log("service--"+email);
    return this.http.post('http://localhost:7000/register/'+email+'/'+username+'/'+password,{headers:this.headers});
    // {
    //   observe: 'body',
    //   headers:new HttpHeaders().append('Content-Type','application/json')
    // });
  }

  login(body:any){
    console.log("-----"+body);
     return this.http.post(this.baseUri+'/login/'+body.email+'/'+body.password,{headers:this.headers})
    //  ,{
    //   observe: 'body',
    //   withCredentials:true,
    //   headers:new HttpHeaders().append('Content-Type','application/json')
    // });
  }
  

  saveImage(title:string , price:string , author:string ,bookDesc:string, image :File){
    const postData =new FormData();
    postData.append('title',title);
    postData.append('price',price);
    postData.append('author',author);
    postData.append('bookDesc',bookDesc);
    postData.append('image',image,title);
    alert(postData)
    console.log(image);
    return this.http.post(this.baseUri+'/createImage',postData)
  }
  // createBook(book:Cart,image:File)
  // {
  //   console.log("addprod service");
  //   // const postData=new FormData();
  //   // postData.append('title',book.title);
  //   // postData.append('price',book.price);
  //   // postData.append('author',book.author);
  //   // postData.append('bookDesc',book.bookDesc);
  //   // postData.append('image',image);
  //   // let registerData:FormData=new FormData();

  //   // registerData.append('title',book.title);
  //   // registerData.append('price',book.price);
  //   // registerData.append('author',book.author);
  //   // registerData.append('bookDesc',book.bookDesc);
  //   // registerData.append('image',image);
  //   // console.log(postData);
  //   console.log(image);
  //   // console.log(book);
  //   //book.filepic=image;
  //   return this.http.post(this.baseUri+'/createImage/'+image,{headers:this.headers});
  // } 
  read()
  {
    return this.http.get(this.baseUri+'/read',{headers:this.headers});
  }
   
  createMobile(name:string , price:string , ram:string ,mobileDesc:string, image :File){

    const postData =new FormData();
    postData.append('name',name);
    postData.append('price',price);
    postData.append('ram',ram);
    postData.append('mobileDesc',mobileDesc);
    postData.append('image',image,name);
    alert(postData)
    console.log(image);
    return this.http.post(this.baseUri+'/create/mobiles',postData)
  }
  readcarts()
  {
    return this.http.get(this.baseUri+'/read/books',{headers:this.headers});
  }
  readMobiles()
  {
    return this.http.get(this.baseUri+'/read/mobiles',{headers:this.headers});
  }
  deleteCart(id:string)
  {
    return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers});
  }

  addtocart(cart:any,user){
    //console.log(typeof(image));
    console.log("----"+typeof(cart.title));
    //console.log(user);
    console.log("carttt"+cart.image);
    this.model=cart;
    //var ob=cart.image;
    // console.log("hfhffh"+title);
    // const postData =new FormData();
    // postData.append('title',title);
    // postData.append('price',price);
    // postData.append('user',user);
    // postData.append('id',id);
    // postData.append('image',image,title);
    // console.log("-------"+JSON.stringify(postData));
    // console.log(image);
    // const postData1 =new FormData();
    // postData1.append('image',cart.image,cart.title);
      let ob={name:cart.title,price:cart.price,id:cart._id,user:user,image:cart.image};
    return this.http.post(this.baseUri+'/addtocart/'+cart.title+'/'+cart.price+'/'+cart._id+'/'+user+'/'+this.model,{cart:this.model});
  }

  
  getcartitems(){
    console.log('cart items service')
    return this.http.get(this.baseUri+'/getcartitems',{headers:this.headers});
  
  }
  updatecart(prod){
    console.log("add cart service");
    
    return this.http.put(this.baseUri+'/updatecart',prod);

  }
  checkingout(id){
    console.log("add cart service");
    console.log('check service'+id)
    return this.http.delete(this.baseUri+'/deleting/'+id);

  }


  setter(cart:Cart)
  {
    this.cart=cart;
  }
  getter()
  {
    return this.cart;
  }
}
