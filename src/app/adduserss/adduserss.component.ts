import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../usersService/user.service';

@Component({
  selector: 'app-adduserss',
  templateUrl: './adduserss.component.html',
  styleUrls: ['./adduserss.component.css']
})
export class AdduserssComponent implements OnInit {

  fg=new FormGroup({
    name:new FormControl(''),
    surname:new FormControl(''),
    adresse:new FormControl(''),
    });

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
  }
adduser(myform:any){
this.userService.addUser(myform).subscribe(
  ()=>{
    console.log("added");
this.router.navigate(['listUser'])
  }
);
}
}
