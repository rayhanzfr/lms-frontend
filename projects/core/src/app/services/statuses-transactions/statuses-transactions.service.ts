import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllStatusesTransactionsResDto } from '../../dto/statuses-transactions/get-all-statuses-transactions-res-dto';
import { GetByCodeStatusesTransactionsResDto } from '../../dto/statuses-transactions/get-by-code-statuses-transactions-res-dto';
import { GetByIdStatusesTransactionsResDto } from '../../dto/statuses-transactions/get-by-id-statuses-transactions-res-dto';
import { StatusesTransactions } from '../../dto/statuses-transactions/statuses-transactions';


@Injectable({
  providedIn: 'root'
})
export class StatusesTransactionsService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<GetAllStatusesTransactionsResDto>{
    return this.http.get<GetAllStatusesTransactionsResDto>('http://localhost:8888/statuses-transactions/')
  }

  getByCode(): Observable<GetByCodeStatusesTransactionsResDto>{
    return this.http.get<GetByCodeStatusesTransactionsResDto>('http://localhost:8888/statuses-transactions/id')
  }

  getById(): Observable<GetByIdStatusesTransactionsResDto>{
    return this.http.get<GetByIdStatusesTransactionsResDto>('http://localhost:8888/statuses-transactions/code')
  }

  save(statusesTrasanctions: StatusesTransactions): Observable<StatusesTransactions>{
    return this.http.post<StatusesTransactions>('http://localhost:8888/statuses-transactions/', statusesTrasanctions)
  }

  update(statusesTrasanctions: StatusesTransactions): Observable<StatusesTransactions>{
    return this.http.put<StatusesTransactions>('http://localhost:8888/statuses-transactions/', statusesTrasanctions)
  }

  delete(id: string): Observable<StatusesTransactions>{
    return this.http.delete<StatusesTransactions>('http://localhost:8888/statuses-transactions/' + id)
  }
}
