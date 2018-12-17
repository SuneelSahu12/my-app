import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  users: string[]; 
  
  constructor() { }

  ngOnInit() {
    this.users = ['Tejas','SUneel','MBhai'];
  }

  onMyBtnClick(){
    alert("Click Works");
  }

}
