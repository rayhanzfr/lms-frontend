import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllHistoriesResDto } from '../../dto/histories/get-all-histories-res-dto';

@Injectable({
  providedIn: 'root'
})
export class HistoriesService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<GetAllHistoriesResDto>{
    return this.http.get<GetAllHistoriesResDto>('http://localhost:8888/histories/')
  }
}
