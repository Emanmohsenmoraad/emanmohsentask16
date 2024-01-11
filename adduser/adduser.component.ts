import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl ,ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  userform!:FormGroup;

  constructor(    private userserv:UserService  , private fb:FormBuilder , private router: Router){
  }
  ngOnInit(): void {
  
  this.userform = this.fb.group( 
   
    {                                                                    
          
      firstname: ['', [Validators.required , 
        Validators.minLength(3) ,Validators.maxLength(50)] ],
      lastname: [''  ,  ], 
      email: ['', [Validators.email] ] ,  

     }
  );

    ;
  }

save(){
  console.log(this.userform.value);

  this.userserv.addUser(this.userform.value);
  this.router.navigate(['']);
}


}
