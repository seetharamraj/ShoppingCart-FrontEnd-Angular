import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
public username;
  constructor() { }
  
  ngOnInit() {
    this.username= window.localStorage.getItem('loguser');
  console.log(this.username);
  }

}
