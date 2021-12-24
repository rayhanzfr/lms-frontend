import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllPermissionsResDto } from '../../dto/permissions/get-all-permissions-res-dto';
import { GetByCodePermissionsResDto } from '../../dto/permissions/get-by-code-permissions-res-dto';
import { GetByIdPermissionsResDto } from '../../dto/permissions/get-by-id-permissions-res-dto';
import { Permissions } from '../../dto/permissions/permissions';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<GetAllPermissionsResDto>{
    return this.http.get<GetAllPermissionsResDto>('http://localhost:8888/permissions/')
  }

  getByCode(): Observable<GetByCodePermissionsResDto>{
    return this.http.get<GetByCodePermissionsResDto>('http://localhost:8888/permissions/id')
  }

  getById(): Observable<GetByIdPermissionsResDto>{
    return this.http.get<GetByIdPermissionsResDto>('http://localhost:8888/permissions/code')
  }

  save(permissions: Permissions): Observable<Permissions>{
    return this.http.post<Permissions>('http://localhost:8888/permissions/', permissions)
  }

  update(permissions: Permissions): Observable<Permissions>{
    return this.http.put<Permissions>('http://localhost:8888/permissions/', permissions)
  }

  delete(id: string): Observable<Permissions>{
    return this.http.delete<Permissions>('http://localhost:8888/permissions/' + id)
  }
}

