import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CartServiceService} from '../../shared/cart-service.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm : FormGroup = new FormGroup({
    email : new FormControl(null,[Validators.email,Validators.required]),
    username : new FormControl(null,Validators.required),
    password : new FormControl(null,Validators.required),
    cpass : new FormControl(null,Validators.required)
})
  constructor(private router:Router, private userService:CartServiceService) { }

  ngOnInit() {
  }
  moveToLogin(){
    this.router.navigate(['/signin']);
  }

  register(){
    if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)){
      alert("please fill form");
      console.log('Invalid Form');
       return;
    }
    console.log(JSON.stringify(this.registerForm.value.email));
     //console.log(JSON.stringify(this.registerForm.value));
    this.userService.register(this.registerForm.value.email,this.registerForm.value.username,this.registerForm.value.password).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/signin']);
      },
      error =>{
        console.log(error)

      }
    )

   console.log(JSON.stringify(this.registerForm.value)); 
  
}
}
