import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserssComponent } from './adduserss/adduserss.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { MobileComponent } from './mobile/mobile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TVComponent } from './tv/tv.component';
import { UpdateuserssssComponent } from './updateuserssss/updateuserssss.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { ListuserComponent } from './user/listuser/listuser.component';
import { RemoveuserComponent } from './user/removeuser/removeuser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  //{path:'',redirectTo:'listUser',pathMatch:'full'},
  {path:'tv',component:TVComponent},
  {path:'mobile',component:MobileComponent},
  {path:'login',component:LoginComponent},
  {path:'adduser',component:AdduserssComponent},
  {path:'delete/:id',component:DeleteuserComponent},
 // {path:'update/:id',component:UpdateuserssssComponent},
  {path:'listUser',component:UsersComponent},
  {path:'reactive',component:ReactiveComponent},
  {path:'form',component:FormComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'user',component:ListuserComponent, children:[
    {path:'add',component:AdduserComponent},
    {path:'update/:id',component:UpdateuserComponent},
    {path:'remove/:id', component:RemoveuserComponent},
  ]},
  {path:'product',loadChildren:()=>import('./product/product.module').then((m)=>{return m.ProductModule} )},

  {path:'**',component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
