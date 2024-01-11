import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent  {
  
  userserve = inject(UserService)
  route: ActivatedRoute = inject(ActivatedRoute);
  user :User |undefined;

  constructor() {
    const userid = Number(this.route.snapshot.params['id']);
    this.user = this.userserve. getempbyid(userid);
  }

}
