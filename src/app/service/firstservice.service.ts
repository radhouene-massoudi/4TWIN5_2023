import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  list=[
    {
    idCustomer: 1,
    firstName: "Mila",
    lastName: " Kunis",
    birthDate: "1999-06-30",
    accountCategory: "Admin",
    email: "mila@kunis.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
    profession: "Software Engineer"
    },
    {
    idCustomer: 2,
    firstName: "George",
    lastName: "Clooney",
    birthDate: "1999-06-30",
    accountCategory: "Customer",
    email: "marlon@brando.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
    profession: "Software Engineer"
    }];
tab=[
  'tab1',
  'tab2',
  'tab3'
]
  constructor(private http:HttpClient) { }
  fetchNbInList(list: any, attribute:string, attributeVal: string){
    for(let t of list){
      return t;
      if(t.attribute==attributeVal){
        return t;
      }
     
    }
  }
  showMsg(d:any){
    console.log(this.tab)
    console.log(d);
  }
  addtab(d:any){
    this.tab.push(d);
    console.log(this.tab);
  }
  showDataOb(){
    let t=new Observable(
      (f)=>{
        f.next(console.log('observa'))
      }
    )
    return t; 
  }
  fetchStudent(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
