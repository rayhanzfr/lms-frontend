import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteInvoicesResDto } from '../../dto/invoices/delete-invoices-res-dto';
import { Invoices } from '../../dto/invoices/invoices';
import { SaveInvoicesResDto } from '../../dto/invoices/save-invoices-res-dto';
import { UpdateInvoicesResDto } from '../../dto/invoices/update-invoices-res-dto';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Invoices[]>{
    return this.http.get<Invoices[]>('http://localhost:8888/invoices/')
  }

  getById(id: string): Observable<Invoices>{
    return this.http.get<Invoices>('http://localhost:8888/invoices/id?id=' + id)
  }

  getByCode(code: string): Observable<Invoices>{
    return this.http.get<Invoices>('http://localhost:8888/invoices/code?code=' + code)
  }
  
  save(invoices: Invoices): Observable<SaveInvoicesResDto>{
    return this.http.post<SaveInvoicesResDto>('http://localhost:8888/invoices/', invoices)
  }

  update(invoices: Invoices): Observable<UpdateInvoicesResDto>{
    return this.http.put<UpdateInvoicesResDto>('http://localhost:8888/invoices/', invoices)
  }

  delete(id: string): Observable<DeleteInvoicesResDto>{
    return this.http.delete<DeleteInvoicesResDto>('http://localhost:8888/invoices/' + id)
  }
}
