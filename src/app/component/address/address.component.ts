import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private router:Router) { }
  proceed()
  {
    alert("order placed sucessfully");
    this.router.navigate(['/user-navbar']);
  }

  ngOnInit() {
  }

}
