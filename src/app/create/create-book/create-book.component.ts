import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CartServiceService} from '../../shared/cart-service.service';
import {Cart} from '../../shared/cart.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
private cart:Cart;
model:any={};
f: File;
preview:any;
private baseUri:string="http://localhost:7000";
selectedFile=null;

  constructor(private cartService:CartServiceService,private router:Router,private http:HttpClient) { }

  ngOnInit() {
    this.cart=this.cartService.getter();
    // this.cartService.read().subscribe(data=>
    //   {
    //     console.log(data);
    //   })
  }
  onFileSelected(event:Event)
  {
    console.log("image picked");
    const file=(event.target as HTMLInputElement).files[0];
    this.f=file;
    console.log(file);
    
    const reader=new FileReader();
    reader.onload=()=>{
      this.preview=reader.result as string;
    }
    reader.readAsDataURL(file);

  }
//   onUpload()
//   {
    
//     console.log("ckicked");
//     this.cartService.addprod(this.f).subscribe(data=>{
//       console.log(data);
      
//     },error=>{
//       console.log(error);
//     })
//     ;
//     // this.http.post(this.baseUri+'/create',this.selectedFile,{headers:this.headers});
//  }
  create()
  {
    console.log("file name"+JSON.stringify(this.model),this.f.name);

    console.log("gfhfjfgh");
    this.cartService.saveImage(this.model.title,this.model.price,this.model.author,this.model.bookDesc,this.f).subscribe(
      data=>
      {
        console.log(data);
        this.router.navigate(['/']);
      },
      error=>
      {
        console.log(error);
      }
    )
  //   if(this.model._id==undefined)
  //   {
  //     console.log("hellllo")
  //     // console.log(form._id);
  //     // console.log(form.title);
  //     // console.log(form.price);
  //     // console.log(form.author);
  //     // console.log(form.bookDesc);
  //   this.cartService.createBook(this.model).subscribe(
  //     data=>
  //     {
  //       console.log(data);
  //       this.router.navigate(['/']);
  //     },
  //     error=>
  //     {
  //       console.log(error);
  //     }
  //   )
  // }


}


}
