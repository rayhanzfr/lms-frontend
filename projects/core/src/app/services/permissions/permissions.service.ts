import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeletePermissionsResDto } from '../../dto/permissions/delete-permissions-res-dto';
import { GetAllPermissionsResDto } from '../../dto/permissions/get-all-permissions-res-dto';
import { GetByCodePermissionsResDto } from '../../dto/permissions/get-by-code-permissions-res-dto';
import { GetByIdPermissionsResDto } from '../../dto/permissions/get-by-id-permissions-res-dto';
import { Permissions } from '../../dto/permissions/permissions';
import { SavePermissionsResDto } from '../../dto/permissions/save-permissions-res-dto';
import { UpdatePermissionsResDto } from '../../dto/permissions/update-permissions-res-dto';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Permissions[]>{
    return this.http.get<Permissions[]>('http://localhost:8888/permissions/')
  }

  getByCode(code: string): Observable<Permissions>{
    return this.http.get<Permissions>('http://localhost:8888/permissions/code/?code='+code)
  }

  getById(id: string): Observable<Permissions>{
    return this.http.get<Permissions>('http://localhost:8888/permissions/id/?id='+id)
  }

  save(permissions: Permissions): Observable<SavePermissionsResDto>{
    return this.http.post<SavePermissionsResDto>('http://localhost:8888/permissions/', permissions)
  }

  update(permissions: Permissions): Observable<UpdatePermissionsResDto>{
    return this.http.put<UpdatePermissionsResDto>('http://localhost:8888/permissions/', permissions)
  }

  delete(id: string): Observable<DeletePermissionsResDto>{
    return this.http.delete<DeletePermissionsResDto>('http://localhost:8888/permissions/id/?id=' + id)
  }
}

