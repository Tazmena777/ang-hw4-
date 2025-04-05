import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api : ApiService) { }

  getAllUsers(){
    return this.api.getAll('https://reqres.in/api/users')
  }
  getUserById(id : number){
    return this.api.getById('https://reqres.in/api/users', id)
  }
}
 
