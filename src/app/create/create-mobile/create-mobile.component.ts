import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CartServiceService} from '../../shared/cart-service.service';
import {Mobile} from '../../shared/mobile.service'
@Component({
  selector: 'app-create-mobile',
  templateUrl: './create-mobile.component.html',
  styleUrls: ['./create-mobile.component.css']
})
export class CreateMobileComponent implements OnInit {
  private mobile:Mobile;
model:any={};
f: File;
preview:any;
private baseUri:string="http://localhost:7000";
selectedFile=null;

  constructor(private cartService:CartServiceService,private router:Router) { }

  ngOnInit() {
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
  create()
  {
    console.log(this.model);

    console.log("gfhfjfgh");
    this.cartService.createMobile(this.model.name,this.model.price,this.model.ram,this.model.mobileDesc,this.f).subscribe(
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
}
}
