import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteUsersResDto } from '../../dto/users/delete-users-res-dto';
import { SaveUsersResDto } from '../../dto/users/save-users-res-dto';
import { UpdateUsersResDto } from '../../dto/users/update-users-res-dto';
import { Users } from '../../dto/users/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:8888/users')
  }
  getAllByCompany():Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:8888/users/companies')
  }
  getById(id: string): Observable<Users> {
    return this.http.get<Users>('http://localhost:8888/users/id?id=' + id);
  }
  
  getByEmail(email: string): Observable<Users> {
    return this.http.get<Users>('http://localhost:8888/users/email?email=' + email);
  }

  save(users: Users): Observable<SaveUsersResDto> {
    return this.http.post<SaveUsersResDto>('http://localhost:8888/users/', users);
  }

  update(users: Users): Observable<UpdateUsersResDto> {
    return this.http.put<UpdateUsersResDto>('http://localhost:8888/users/', users);
  }

  delete(id: string): Observable<DeleteUsersResDto> {
    return this.http.delete<DeleteUsersResDto>('http://localhost:8888/users/id?id=' + id);
  }
}
