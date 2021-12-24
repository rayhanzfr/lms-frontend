import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllTransactionsInResDto } from '../../dto/transactions-in/get-all-transactions-in-res-dto';
import { GetByTransactionsInCodeResDto } from '../../dto/transactions-in/get-by-transactions-in-code-res-dto';
import { GetByTransactionsInIdResDto } from '../../dto/transactions-in/get-by-transactions-in-id-res-dto';
import { SaveFullTransactionsInReqDto } from '../../dto/transactions-in/save-full-transactions-in-req-dto';
import { SaveFullTransactionsInResDto } from '../../dto/transactions-in/save-full-transactions-in-res-dto';

@Injectable({
  providedIn: 'root'
})
export class TransactionsInService {

  constructor(private http: HttpClient) { }

  GetAll(): Observable<GetAllTransactionsInResDto> {
    return this.http.get<GetAllTransactionsInResDto>('http://localhost:8888/transactions-in/');
  }

  GetById(): Observable<GetByTransactionsInIdResDto> {
    return this.http.get<GetByTransactionsInIdResDto>('http://localhost:8888/transactions-in/id');
  }

  GetByCode(): Observable<GetByTransactionsInCodeResDto> {
    return this.http.get<GetByTransactionsInCodeResDto>('http://localhost:8888/transactions-in/code');
  }

  insertAll(saveFullTransactionsInReqDto: SaveFullTransactionsInReqDto): Observable<SaveFullTransactionsInReqDto>{
    return this.http.post<SaveFullTransactionsInReqDto>('http://localhost:8888/transactions-in/', saveFullTransactionsInReqDto);
  }
}
