import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteStatusesTransactionsResDto } from '../../dto/statuses-transactions/delete-statuses-transactions-res-dto';
import { GetAllStatusesTransactionsResDto } from '../../dto/statuses-transactions/get-all-statuses-transactions-res-dto';
import { GetByCodeStatusesTransactionsResDto } from '../../dto/statuses-transactions/get-by-code-statuses-transactions-res-dto';
import { GetByIdStatusesTransactionsResDto } from '../../dto/statuses-transactions/get-by-id-statuses-transactions-res-dto';
import { StatusesTransactions } from '../../dto/statuses-transactions/statuses-transactions';


@Injectable({
  providedIn: 'root'
})
export class StatusesTransactionsService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<StatusesTransactions[]>{
    return this.http.get<StatusesTransactions[]>('http://localhost:8888/statuses-transactions/')
  }

  getByCode(code: string): Observable<StatusesTransactions>{
    return this.http.get<StatusesTransactions>('http://localhost:8888/statuses-transactions/code/?code='+code)
  }

  getById(id:string): Observable<StatusesTransactions>{
    return this.http.get<StatusesTransactions>('http://localhost:8888/statuses-transactions/id/?id='+id)
  }

  save(statusesTrasanctions: StatusesTransactions): Observable<StatusesTransactions>{
    return this.http.post<StatusesTransactions>('http://localhost:8888/statuses-transactions/', statusesTrasanctions)
  }

  update(statusesTrasanctions: StatusesTransactions): Observable<StatusesTransactions>{
    return this.http.put<StatusesTransactions>('http://localhost:8888/statuses-transactions/', statusesTrasanctions)
  }

  delete(id: string): Observable<DeleteStatusesTransactionsResDto>{
    return this.http.delete<DeleteStatusesTransactionsResDto>('http://localhost:8888/statuses-transactions/' + id)
  }
}
