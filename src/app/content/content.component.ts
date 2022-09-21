import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
msg='bonjour';
kolor='red';

user=[ { idCustomer: 1, firstName: "Mila", lastName: " un", birthDate: "1999 - 06 - 30", accountCategory: "Admin", email: "mila@kunis.com", password: "test", picture: "https://bootdey.com/img/Content/avatar/avatar3.png", profession: "Software Engineer" },
{ idCustomer: 2, firstName: "Mila", lastName: " t", birthDate: "1999 - 06 - 30", accountCategory: "Admin", email: "mila@kunis.com", password: "test", picture: "https://bootdey.com/img/Content/avatar/avatar3.png", profession: "Software Engineer" },
{ idCustomer: 3, firstName: "Mila", lastName: " e", birthDate: "1999 - 06 - 30", accountCategory: "Admin", email: "mila@kunis.com", password: "test", picture: "https://bootdey.com/img/Content/avatar/avatar3.png", profession: "Software Engineer" },
{ idCustomer: 4, firstName: "Mila", lastName: " f", birthDate: "1999 - 06 - 30", accountCategory: "Admin", email: "mila@kunis.com", password: "test", picture: "https://bootdey.com/img/Content/avatar/avatar3.png", profession: "Software Engineer" },
{ idCustomer: 5, firstName: "Mila", lastName: "K", birthDate: "1999 - 06 - 30", accountCategory: "Admin", email: "mila@kunis.com", password: "test", picture: "https://bootdey.com/img/Content/avatar/avatar3.png", profession: "Software Engineer" },

]
  constructor() { 
    console.log('cons')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }
showMsg(){
  //console.log('bonjour msg')
  this.kolor='green';
}
getColor(){
  if(this.kolor=='red'){
this.kolor='pink';

  }
  return this.kolor;
}
deleteUser(id:any){
//console.log(this.user[id]);
this.user.splice(id-1,1)

}
}
