import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginReqDto } from '../../dto/login/login-req-dto';
import { LoginResDto } from '../../dto/login/login-res-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(data:LoginReqDto):Observable<LoginResDto>{
    return this.http.post<LoginResDto>(`http://localhost:1234/login`,data)
  }
  saveUserData(data:LoginResDto):void{
    localStorage.setItem('data',JSON.stringify(data))
  }
  getToken():string|undefined{
    let data= localStorage.getItem('data')
    if (data ) {
      let result:LoginResDto=JSON.parse(data)
      if (result.token) {
        return result.token
      }
    }
    return undefined
  }
  getUsersId():string|undefined{
    let data = localStorage.getItem('data')
    if(data){
      let result:LoginResDto=JSON.parse(data)
      if (result.usersId) {
        return result.usersId
      }
    }
    return undefined
  }
  
  getRolesCode():string|undefined{
    let data = localStorage.getItem('data')
    if(data){
      let result:LoginResDto=JSON.parse(data)
      if (result.roleCode) {
        return result.roleCode
      }
    }
    return undefined
  }
  clearStorage():void{
    localStorage.clear()
  }
}