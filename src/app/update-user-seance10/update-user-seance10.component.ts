import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../usersService/user.service';

@Component({
  selector: 'app-update-user-seance10',
  templateUrl: './update-user-seance10.component.html',
  styleUrls: ['./update-user-seance10.component.css']
})
export class UpdateUserSeance10Component implements OnInit,OnChanges {
@Input()user:any;
  constructor( private userService:UserService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.user)
  }
onSubmitUpdate(f:any){
  this.userService.updateUsers(f,this.user.id).subscribe(
    ()=>{
      console.log('updated');
    }
  );
}
}
