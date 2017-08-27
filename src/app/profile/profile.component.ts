import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName = '';
  allowToAddUser = true;
  constructor() {
  }
    ngOnInit() {
  }

  isAllowAddUserName() {
    if (this.userName !== '') {
      this.allowToAddUser = false;
    }
  }
}
