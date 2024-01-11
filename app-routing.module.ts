import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

const routes: Routes = [

  { path: '', component: UserlistComponent },
  { path: 'users/add', component: AdduserComponent },
  { path: 'users/edit/:id', component: EdituserComponent },
  { path: 'users/view/:id', component: ViewuserComponent },


  { path: '*', component: UserlistComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
