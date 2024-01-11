import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { id: 1, firstname: 'John',lastname: ' Doe', email: 'john@example.com' },
    { id: 2, firstname: 'John',lastname: ' Doe', email: 'john@example.com' },
 
  ];


  constructor() { }



  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<User | undefined> {
    return of(this.users.find(user => user.id === id));
  }
  getempbyid(id:number):User|undefined{
  
    return this.users.find( users =>users.id === id );
}

  addUser(user: User): void {
    user.id = Math.max(...this.users.map(u => u.id)  ) + 1;
    this.users.push(user);
  }
  updateuser(userid:number , updateduser: User ){
  
    const index  =  this.users.findIndex( users =>users.id === userid);
  
    this.users[index] = {...updateduser , id : userid   }
  
  
  }
  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }

}
