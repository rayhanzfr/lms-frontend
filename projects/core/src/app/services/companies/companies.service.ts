import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Companies } from '../../dto/companies/companies';
import { GetAllCompaniesResDto } from '../../dto/companies/get-all-companies-res-dto';
import { GetByCodeCompaniesResDto } from '../../dto/companies/get-by-code-companies-res-dto';
import { GetByIdCompaniesResDto } from '../../dto/companies/get-by-id-companies-res-dto';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<GetAllCompaniesResDto>{
    return this.http.get<GetAllCompaniesResDto>('http://localhost:8888/companies/')
  }

  getByCode(): Observable<GetByCodeCompaniesResDto>{
    return this.http.get<GetByCodeCompaniesResDto>('http://localhost:8888/companies/id')
  }

  getById(): Observable<GetByIdCompaniesResDto>{
    return this.http.get<GetByIdCompaniesResDto>('http://localhost:8888/companies/code')
  }

  save(companies: Companies): Observable<Companies>{
    return this.http.post<Companies>('http://localhost:8888/companies/', companies)
  }

  update(companies: Companies): Observable<Companies>{
    return this.http.put<Companies>('http://localhost:8888/companies/', companies)
  }

  delete(id: string): Observable<Companies>{
    return this.http.delete<Companies>('http://localhost:8888/companies/' + id)
  }
}
