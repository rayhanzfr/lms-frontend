import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllHistoriesResDto } from '../../dto/histories/get-all-histories-res-dto';
import { HistoriesReportResDto } from '../../dto/histories/histories-report-res-dto';

@Injectable({
  providedIn: 'root'
})
export class HistoriesService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<GetAllHistoriesResDto>{
    return this.http.get<GetAllHistoriesResDto>('http://localhost:8888/histories/')
  }
  generatePdf(companiesCode:string):Observable<HistoriesReportResDto[]>{
    return this.http.get<HistoriesReportResDto[]>(`http://localhost:8888/histories/pdf?companiesCode=${companiesCode}`)
  }
}
