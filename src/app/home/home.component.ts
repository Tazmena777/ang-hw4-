import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { User } from '../Models/user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule , RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private httpUsers : UserService) {}

  ngOnInit(){
    this.httpUsers.getAllUsers().subscribe((data: any) => {
      this.randerUsers(data.data);
    });
  }

  randerUsers(arr : User[]) {
    this.arrayForUsers = arr
  }

  arrayForUsers : User[] = [];
}
