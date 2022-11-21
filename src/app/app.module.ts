import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdduserComponent } from './user/adduser/adduser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { RemoveuserComponent } from './user/removeuser/removeuser.component';
import { ListuserComponent } from './user/listuser/listuser.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { ProductModule } from './product/product.module';
import { FormComponent } from './form/form.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { CComponent } from './c/c.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { AdduserssComponent } from './adduserss/adduserss.component';
import { UpdateuserssssComponent } from './updateuserssss/updateuserssss.component';
import { TVComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { ErrorsComponent } from './errors/errors.component';
import { UpdateUserSeance10Component } from './update-user-seance10/update-user-seance10.component';
import { ShowoneProductComponent } from './seance 11/showone-product/showone-product.component';
import { ProductComponent } from './seance 11/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ContentComponent,
    AdduserComponent,
    UpdateuserComponent,
    RemoveuserComponent,
    ListuserComponent,
    NotfoundComponent,
    LoginComponent,
    DetailComponent,
    FormComponent,
    ReactiveComponent,
    CComponent,
    C1Component,
    C2Component,
    UsersComponent,
    DeleteuserComponent,
    AdduserssComponent,
    UpdateuserssssComponent,
    TVComponent,
    MobileComponent,
    ShowProductComponent,
    ErrorsComponent,
    UpdateUserSeance10Component,
    ShowoneProductComponent,
    ProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    ProductModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
