import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllTransactionsOutResDto } from '../../dto/transactions-out/get-all-transactions-out-res-dto';
import { GetByTransactionsOutIdResDto } from '../../dto/transactions-out/get-by-transactions-out-id-res-dto';
import { SaveFullTransactionsOutReqDto } from '../../dto/transactions-out/save-full-transactions-out-req-dto';
import { SaveFullTransactionsOutResDto } from '../../dto/transactions-out/save-full-transactions-out-res-dto';

@Injectable({
  providedIn: 'root'
})
export class TransactionsOutService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<GetAllTransactionsOutResDto> {
    return this.http.get<GetAllTransactionsOutResDto>(`http://localhost:8888/transactions-out/`);
  }

  getById(id:string): Observable<GetByTransactionsOutIdResDto> {
    return this.http.get<GetByTransactionsOutIdResDto>(`http://localhost:8888/transactions-out/id/?id=${id}`);
  }

  insertAll(saveFullTransactionsOutReqDto: SaveFullTransactionsOutReqDto): Observable<SaveFullTransactionsOutResDto>{
    return this.http.post<SaveFullTransactionsOutResDto>('http://localhost:8888/transactions-out/', saveFullTransactionsOutReqDto);
  }
}
