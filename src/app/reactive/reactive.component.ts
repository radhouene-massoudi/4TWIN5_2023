import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
login=new FormControl('',[Validators.required]);
password=new FormControl();

fg=new FormGroup({
loginFG:new FormControl('',[Validators.required,Validators.email,Validators.minLength(3)]),
passwordFG:new FormControl('',[Validators.required]),
});
formBuilder=this.fb.group({
  name:['',[Validators.required,Validators.email]],
  surname:[''],
  cours:this.fb.array([
    new FormControl('angular'),
    new FormControl('react')
  ])
});

  constructor(private fb:FormBuilder) {

   }

  ngOnInit(): void {
    
  }
  showFC(){
    console.log(this.login);
  }
  showFG(){
    console.log(this.fg.valid);
  }
  get loginFG(){
    return this.fg.get('loginFG')
  }
  showfb(){
    console.log(this.formBuilder)
  }
  get cours(){
    return this.formBuilder.get('cours') as FormArray
  }
  addcours(){
    this.cours.push(new FormControl(''))
  }
  remove(i:any){
this.cours.removeAt(i)
  }
}

