import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllRolesResDto } from '../../dto/roles/get-all-roles-res-dto';
import { GetByCodeRolesResDto } from '../../dto/roles/get-by-code-roles-res-dto';
import { GetByIdRolesResDto } from '../../dto/roles/get-by-id-roles-res-dto';
import { Roles } from '../../dto/roles/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<GetAllRolesResDto>{
    return this.http.get<GetAllRolesResDto>('http://localhost:8888/roles/')
  }

  getByCode(): Observable<GetByCodeRolesResDto>{
    return this.http.get<GetByCodeRolesResDto>('http://localhost:8888/roles/id')
  }

  getById(): Observable<GetByIdRolesResDto>{
    return this.http.get<GetByIdRolesResDto>('http://localhost:8888/roles/code')
  }

  save(roles: Roles): Observable<Roles>{
    return this.http.post<Roles>('http://localhost:8888/roles/', roles)
  }

  update(roles: Roles): Observable<Roles>{
    return this.http.put<Roles>('http://localhost:8888/roles/', roles)
  }

  delete(id: string): Observable<Roles>{
    return this.http.delete<Roles>('http://localhost:8888/roles/' + id)
  }
}
