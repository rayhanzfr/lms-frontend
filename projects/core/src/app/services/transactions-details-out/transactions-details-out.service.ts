import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { GetAllTransactionsDetailsOutResDto } from '../../dto/transactions-out/get-all-transactions-details-out-res-dto'

@Injectable({
  providedIn: 'root',
})
export class TransactionsDetailOutService {
  constructor(private http: HttpClient) {}
  getByCodeTransactionsOut(code:string): Observable<GetAllTransactionsDetailsOutResDto> {
    return this.http.get<GetAllTransactionsDetailsOutResDto>(`http://localhost:8888/transactions-detail-out/?transactionOutCode=${code}`);
  }
}
