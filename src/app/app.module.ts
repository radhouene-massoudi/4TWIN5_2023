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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
