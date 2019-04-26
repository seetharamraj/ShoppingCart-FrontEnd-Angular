import { Component, OnInit } from '@angular/core';
import { Router, Data } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CartServiceService} from '../../shared/cart-service.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm : FormGroup = new FormGroup({
    email : new FormControl(null,[Validators.email,Validators.required]),
    password : new FormControl(null, Validators.required)
  });

  constructor(private router:Router, private user:CartServiceService) { }

  ngOnInit() {
  }
  moveToRegister(){
    this.router.navigate(['/signup']);
  }

  login(){
    console.log("in login 1");
    console.log(this.loginForm.value);
    if(!this.loginForm.valid){
      console.log('Invalid');
      return;
    }

    console.log("............"+JSON.stringify(this.loginForm.value));

    this.user.login(this.loginForm.value).subscribe(
      data=>{
         console.log("jsonnnn"+JSON.stringify(data).includes('email'));
         console.log("datatatatat"+data);
         console.log("type--"+typeof(JSON.stringify(data)));
        // var result = Object.keys(data).map(function(key) {
        //   return [Number(key), data[key]];
        // });
        // console.log(this.loginForm.controls.email);
        // console.log(JSON.stringify(data);
        var result:string="json"+JSON.stringify(data).includes('email');
        console.log("result--"+result);
        console.log("--------------------ghjhg---");
        if(result=='jsontrue')
        {
          var emails=this.loginForm.controls.email;
          console.log(emails.value);
          console.log("in else login");
          if(emails.value=='admin@gmail.com')
          {
          this.router.navigate(['/admin']);
          }
          else
          {
            window.localStorage.setItem('loguser',emails.value);
            this.router.navigate(['/users']);

          }
          //this.router.navigate(['/admin']);
        }
        else
        {
          alert("wrong passwors");
          this.router.navigate['/login'];
          console.log("in iflogin");
          //this.router.navigate(['/user']);
        }
        
      },
      error=>{
        console.log(error);
      }
    )

    console.log(JSON.stringify(this.loginForm.value));
  }
}
