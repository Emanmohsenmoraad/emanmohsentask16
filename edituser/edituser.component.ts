import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  
  updateuserform! : FormGroup;
  userid!:number;


constructor( private formbuilder:FormBuilder ,private  userService: UserService ,private route:ActivatedRoute  ){

  this.updateuserform =  this.formbuilder.group({
    firstname:['' ],
    lastname :[''],
    email:[''],
 

  })


}


ngOnInit() {
  this.route.params.subscribe(params => {
    this.userid = +params['id'];
    this.loaduserDetails();
  });
}

loaduserDetails() {
  const useeee = this.userService. getUserById(this.userid);

  if (useeee) {
    this.updateuserform.patchValue(useeee);
  } else {
    // Redirect to the product list if the product is not found
  
  }
}

updateUser() {
  if (this.updateuserform.valid) {
    const updateduser: User = {
      id: this.userid,
      ...this.updateuserform.value
    };

    this.userService.updateuser(this.userid, updateduser);
  
  }
}



}
