import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteStatusesAssetsResDto } from '../../dto/statuses-assets/delete-statuses-assets-res-dto';
import { GetAllStatusesAssetsResDto } from '../../dto/statuses-assets/get-all-statuses-assets-res-dto';
import { GetByCodeStatusesAssetsResDto } from '../../dto/statuses-assets/get-by-code-statuses-assets-res-dto';
import { GetByIdStatusesAssetsResDto } from '../../dto/statuses-assets/get-by-id-statuses-assets-res-dto';
import { SaveStatusesAssetsResDto } from '../../dto/statuses-assets/save-statuses-assets-res-dto';
import { StatusesAssets } from '../../dto/statuses-assets/statuses-assets';
import { UpdateStatusesAssetsResDto } from '../../dto/statuses-assets/update-statuses-assets-res-dto';

@Injectable({
  providedIn: 'root'
})
export class StatusesAssetsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<StatusesAssets[]> {
    return this.http.get<StatusesAssets[]>('http://localhost:8888/statuses-assets/');
  }

  getById(id: string): Observable<GetByIdStatusesAssetsResDto> {
    return this.http.get<GetByIdStatusesAssetsResDto>('http://localhost:8888/statuses-assets/id?id=' + id);
  }
  
  getByCode(code: string): Observable<GetByCodeStatusesAssetsResDto> {
    return this.http.get<GetByCodeStatusesAssetsResDto>('http://localhost:8888/statuses-assets/code?code=' + code);
  }

  save(statusesAssets: StatusesAssets): Observable<SaveStatusesAssetsResDto> {
    return this.http.post<SaveStatusesAssetsResDto>('http://localhost:8888/statuses-assets/', statusesAssets);
  }

  update(statusesAssets: StatusesAssets): Observable<UpdateStatusesAssetsResDto> {
    return this.http.put<UpdateStatusesAssetsResDto>('http://localhost:8888/statuses-assets/', statusesAssets);
  }

  delete(id: string): Observable<DeleteStatusesAssetsResDto> {
    return this.http.delete<DeleteStatusesAssetsResDto>('http://localhost:8888/statuses-assets/' + id);
  }
}
