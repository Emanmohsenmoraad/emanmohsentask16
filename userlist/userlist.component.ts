import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users!:User[];

  constructor( private userservce :UserService   ){

  }
  ngOnInit(): void {
  //  this.users = this.userservce.getUsers();  not observable 
    this.userservce.getUsers().subscribe(  
       (users)=> { this.users = users }    );
  }


  deleteUser(id: number): void {
   
      this.userservce.deleteUser(id);
    
  }

}
