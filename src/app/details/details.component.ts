import { Component } from '@angular/core';
import { User } from '../Models/user';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { UserService } from '../Services/user.service';
 
@Component({
  selector: 'app-details',
  imports: [RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  constructor(private rout : ActivatedRoute,
    private api : UserService){
      this.rout.params.subscribe(data => this.getInfoAboutSingleUser(data['id']))
    }
 
 
    infoAboutUser : User = new User()
 
getInfoAboutSingleUser(id : number){
      this.api.getUserById(id).subscribe((resp : any) => {  
      this.infoAboutUser = resp.data
   })}
 
}