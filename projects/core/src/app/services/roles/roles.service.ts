import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllRolesResDto } from '../../dto/roles/get-all-roles-res-dto';
import { GetByCodeRolesResDto } from '../../dto/roles/get-by-code-roles-res-dto';
import { GetByIdRolesResDto } from '../../dto/roles/get-by-id-roles-res-dto';
import { Roles } from '../../dto/roles/roles';
import { SaveRolesResDto } from '../../dto/roles/save-roles-res-dto';
import { UpdateRolesResDto } from '../../dto/roles/update-roles-res-dto';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<GetAllRolesResDto>{
    return this.http.get<GetAllRolesResDto>('http://localhost:8888/roles/')
  }

  getByCode(code: string): Observable<GetByCodeRolesResDto>{
    return this.http.get<GetByCodeRolesResDto>('http://localhost:8888/roles/code/?code='+code)
  }

  getById(id:string): Observable<GetByIdRolesResDto>{
    return this.http.get<GetByIdRolesResDto>('http://localhost:8888/roles/id/?id='+id)
  }

  save(roles: Roles): Observable<SaveRolesResDto>{
    return this.http.post<SaveRolesResDto>('http://localhost:8888/roles/', roles)
  }

  update(roles: Roles): Observable<UpdateRolesResDto>{
    return this.http.put<UpdateRolesResDto>('http://localhost:8888/roles/', roles)
  }

  delete(id: string): Observable<Roles>{
    return this.http.delete<Roles>('http://localhost:8888/roles/' + id)
  }
}