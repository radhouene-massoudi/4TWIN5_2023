import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { ListuserComponent } from './user/listuser/listuser.component';
import { RemoveuserComponent } from './user/removeuser/removeuser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
const routes: Routes = [
  {path:'',redirectTo:'reactive',pathMatch:'full'},
  {path:'login',component:LoginComponent},
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
