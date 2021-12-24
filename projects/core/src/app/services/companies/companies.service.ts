import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Companies } from '../../dto/companies/companies';
import { DeleteCompaniesResDto } from '../../dto/companies/delete-companies-res-dto';
import { GetAllCompaniesResDto } from '../../dto/companies/get-all-companies-res-dto';
import { GetByCodeCompaniesResDto } from '../../dto/companies/get-by-code-companies-res-dto';
import { GetByIdCompaniesResDto } from '../../dto/companies/get-by-id-companies-res-dto';
import { SaveCompaniesResDto } from '../../dto/companies/save-companies-res-dto';
import { UpdateCompaniesResDto } from '../../dto/companies/update-companies-res-dto';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<GetAllCompaniesResDto>{
    return this.http.get<GetAllCompaniesResDto>('http://localhost:8888/companies/')
  }

  getById(id: string): Observable<GetByCodeCompaniesResDto>{
    return this.http.get<GetByCodeCompaniesResDto>('http://localhost:8888/companies/id?id=' + id)
  }

  getByCode(code: string): Observable<GetByIdCompaniesResDto>{
    return this.http.get<GetByIdCompaniesResDto>('http://localhost:8888/companies/code?code=' + code)
  }

  save(companies: Companies): Observable<SaveCompaniesResDto>{
    return this.http.post<SaveCompaniesResDto>('http://localhost:8888/companies/', companies)
  }

  update(companies: Companies): Observable<UpdateCompaniesResDto>{
    return this.http.put<UpdateCompaniesResDto>('http://localhost:8888/companies/', companies)
  }

  delete(id: string): Observable<DeleteCompaniesResDto>{
    return this.http.delete<DeleteCompaniesResDto>('http://localhost:8888/companies/' + id)
  }
}
