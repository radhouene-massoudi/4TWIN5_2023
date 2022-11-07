import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../usersService/user.service';

@Component({
  selector: 'app-updateuserssss',
  templateUrl: './updateuserssss.component.html',
  styleUrls: ['./updateuserssss.component.css']
})
export class UpdateuserssssComponent implements OnInit {
  id:any;
  user:any;
  name:any;

  constructor(private userService:UserService,
    private acr:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.acr.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(
      (d)=>{
        console.log(d);
        this.user=d;
        this.name=this.user.name
      }
    )
  }
updateuser(myformdata:any){

  this.userService.getUserById(this.id).subscribe( 
  (d)=>{
    console.log(d);
      
this.userService.updateUsers(myformdata,this.id).subscribe(
  ()=>{
    console.log('updated')
  }
);

    },
   (err)=>{
      console.log('err')
    }

  );

}
}
