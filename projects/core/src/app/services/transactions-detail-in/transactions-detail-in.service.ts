import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetByTransactionsDetailInCodeResDto } from '../../dto/transactions-in/get-by-transactions-detail-in-code-res-dto';

@Injectable({
  providedIn: 'root'
})
export class TransactionsDetailInService {

  constructor(private http: HttpClient) { }

  GetByCodeTransactionsIn(): Observable<GetByTransactionsDetailInCodeResDto> {
    return this.http.get<GetByTransactionsDetailInCodeResDto>('http://localhost:8888/transactions-detail-in/code');
  }
}
