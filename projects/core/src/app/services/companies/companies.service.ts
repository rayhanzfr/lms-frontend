import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Companies } from '../../dto/companies/companies';
import { DeleteCompaniesResDto } from '../../dto/companies/delete-companies-res-dto';
import { SaveCompaniesResDto } from '../../dto/companies/save-companies-res-dto';
import { UpdateCompaniesResDto } from '../../dto/companies/update-companies-res-dto';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Companies[]>{
    return this.http.get<Companies[]>('http://localhost:8888/companies/')
  }

  getById(id: string): Observable<Companies>{
    return this.http.get<Companies>('http://localhost:8888/companies/id?id=' + id)
  }

  getByCode(code: string): Observable<Companies>{
    return this.http.get<Companies>('http://localhost:8888/companies/code?code=' + code)
  }

  save(companies: Companies, file: File | null): Observable<SaveCompaniesResDto>{
    const formData: FormData = new FormData();
    formData.append('data', JSON.stringify(companies));
    formData.append('file', file!);
    return this.http.post<SaveCompaniesResDto>('http://localhost:8888/companies/',formData)
  }

  update(companies: Companies, file: File | null): Observable<UpdateCompaniesResDto>{
    const formData: FormData = new FormData();
    formData.append('data', JSON.stringify(companies));
    formData.append('file', file!);
    return this.http.put<UpdateCompaniesResDto>('http://localhost:8888/companies/',formData)
  }

  delete(id: string): Observable<DeleteCompaniesResDto>{
    return this.http.delete<DeleteCompaniesResDto>('http://localhost:8888/companies/' + id)
  }
}
