import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllPermissionsRolesResDto } from '../../dto/permissions-roles/get-all-permissions-res-dto';
import { SavePermissionsRolesResDto } from '../../dto/permissions-roles/save-permissions-roles-res-dto';
import { UpdatePermissionsRolesResDto } from '../../dto/permissions-roles/update-permissions-roles-res-dto';

@Injectable({
  providedIn: 'root'
})
export class PermissionsRolesService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<GetAllPermissionsRolesResDto>{
    return this.http.get<GetAllPermissionsRolesResDto>('http://localhost:8888/permissions/')
  }
  save(permissions: Permissions): Observable<SavePermissionsRolesResDto>{
    return this.http.post<SavePermissionsRolesResDto>('http://localhost:8888/permissions/', permissions)
  }

  update(permissions: Permissions): Observable<UpdatePermissionsRolesResDto>{
    return this.http.put<UpdatePermissionsRolesResDto>('http://localhost:8888/permissions/', permissions)
  }
}
