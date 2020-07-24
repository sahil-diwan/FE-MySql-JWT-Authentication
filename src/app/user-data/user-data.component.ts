import { Component, OnInit } from '@angular/core';
import { AlluserService } from 'src/app/alluser.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  public userData;
  constructor(private allUserService:AlluserService,private authService:AuthService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.allUserService.getAllUsers().subscribe(
      data => {this.userData = data},
      err => console.log(err),
      () => console.log('user data loaded')
    );
  }

  logOut() {
    this.authService.logout();
  }
}
