import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllStatusesAssetsResDto } from '../../dto/statuses-assets/get-all-statuses-assets-res-dto';
import { GetByCodeStatusesAssetsResDto } from '../../dto/statuses-assets/get-by-code-statuses-assets-res-dto';
import { GetByIdStatusesAssetsResDto } from '../../dto/statuses-assets/get-by-id-statuses-assets-res-dto';
import { StatusesAssets } from '../../dto/statuses-assets/statuses-assets';

@Injectable({
  providedIn: 'root'
})
export class StatusesAssetsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<GetAllStatusesAssetsResDto> {
    return this.http.get<GetAllStatusesAssetsResDto>('http://localhost:8888/statuses-assets/');
  }

  getById(): Observable<GetByIdStatusesAssetsResDto> {
    return this.http.get<GetByIdStatusesAssetsResDto>('http://localhost:8888/statuses-assets/id');
  }
  
  getByCode(): Observable<GetByCodeStatusesAssetsResDto> {
    return this.http.get<GetByCodeStatusesAssetsResDto>('http://localhost:8888/statuses-assets/code');
  }

  save(statusesAssets: StatusesAssets): Observable<StatusesAssets> {
    return this.http.post<StatusesAssets>('http://localhost:8888/statuses-assets/', statusesAssets);
  }

  update(statusesAssets: StatusesAssets): Observable<StatusesAssets> {
    return this.http.put<StatusesAssets>('http://localhost:8888/statuses-assets/', statusesAssets);
  }

  delete(id: string): Observable<StatusesAssets> {
    return this.http.delete<StatusesAssets>('http://localhost:8888/statuses-assets/' + id);
  }
}
