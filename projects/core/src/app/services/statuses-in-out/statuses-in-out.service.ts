import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteStatusesInOutResDto } from '../../dto/statuses-in-out/delete-statuses-in-out-res-dto';
import { SaveStatusesInOutResDto } from '../../dto/statuses-in-out/save-statuses-assets-res-dto';
import { StatusesInOut } from '../../dto/statuses-in-out/statuses-in-out';
import { UpdateStatusesInOutResDto } from '../../dto/statuses-in-out/update-statuses-assets-res-dto';

@Injectable({
  providedIn: 'root'
})
export class StatusesInOutService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<StatusesInOut[]>{
    return this.http.get<StatusesInOut[]>('http://localhost:8888/statauses-in-out/')
  }
  getById(id:string): Observable<StatusesInOut>{
    return this.http.get<StatusesInOut>('http://localhost:8888/statuses-in-out/id?id='+id)
  }
  getByCode(code:string):Observable<StatusesInOut>{
    return this.http.get<StatusesInOut>('http://localhost:8888/statuses-in-out/code?code='+code)
  }
  save(save:StatusesInOut):Observable<SaveStatusesInOutResDto>{
    return this.http.post<SaveStatusesInOutResDto>('http://localhost:8888/statuses-in-out/',save)
  }
  update(update:StatusesInOut):Observable<UpdateStatusesInOutResDto>{
    return this.http.put<UpdateStatusesInOutResDto>('http://localhost:8888/statuses-in-out/',update)
  }
  delete(id:string):Observable<DeleteStatusesInOutResDto>{
    return this.http.delete<DeleteStatusesInOutResDto>('http://localhost:8888/statuses-in-out/id='+id)
  }
}
