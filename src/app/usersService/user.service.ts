import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl=environment.url+'user/';
  constructor(private http:HttpClient) { }

  fetchUsers(){
  return  this.http.get(this.baseUrl)
  }
  removeUser(id:any){
return this.http.delete(this.baseUrl+id)
  }

  addUser(user:any){
return this.http.post(this.baseUrl,user);
  }
  updateUsers(d:any,id:any){
return this.http.put(this.baseUrl+id,d)
  }
  getUserById(id:any){
return this.http.get(this.baseUrl+id)
  }
  
}
