import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../usersService/user.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
id:any;
  constructor(private userService: UserService,private acR:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
this.id=this.acR.snapshot.params['id'];
    this.userService.removeUser(this.id).subscribe(
()=>{
  console.log('removed')
this.router.navigate(['listUser'])
}
    );
  }

}
