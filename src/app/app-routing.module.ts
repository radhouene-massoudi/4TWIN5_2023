import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { ListuserComponent } from './user/listuser/listuser.component';
import { RemoveuserComponent } from './user/removeuser/removeuser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'user',component:ListuserComponent, children:[
    {path:'add',component:AdduserComponent},
    {path:'update/:id',component:UpdateuserComponent},
    {path:'remove/:id', component:RemoveuserComponent},
  ]},
  

  {path:'**',component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
