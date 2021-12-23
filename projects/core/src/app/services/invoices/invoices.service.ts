import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllInvoicesResDto } from '../../dto/invoices/get-all-invoices-res-dto';
import { GetByIdInvoicesResDto } from '../../dto/invoices/get-by-id-invoices-res-dto';
import { Invoices } from '../../dto/invoices/invoices';
import { GetByCodeLocationsResDto } from '../../dto/locations/get-by-code-locations-res-dto';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<GetAllInvoicesResDto>{
    return this.http.get<GetAllInvoicesResDto>('http://localhost:8888/invoices/')
  }

  getById(): Observable<GetByIdInvoicesResDto>{
    return this.http.get<GetByIdInvoicesResDto>('http://localhost:8888/invoices/id')
  }

  getByCode(): Observable<GetByCodeLocationsResDto>{
    return this.http.get<GetByCodeLocationsResDto>('http://localhost:8888/invoices/code')
  }
  
  save(invoices: Invoices): Observable<Invoices>{
    return this.http.post<Invoices>('http://localhost:8888/invoices/', invoices)
  }

  update(invoices: Invoices): Observable<Invoices>{
    return this.http.put<Invoices>('http://localhost:8888/invoices/', invoices)
  }

  delete(id: string): Observable<Invoices>{
    return this.http.delete<Invoices>('http://localhost:8888/invoices/' + id)
  }
}
