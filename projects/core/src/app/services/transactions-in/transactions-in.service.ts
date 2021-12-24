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

  GetById(id: string): Observable<GetByTransactionsInIdResDto> {
    return this.http.get<GetByTransactionsInIdResDto>('http://localhost:8888/transactions-in/id?id=' + id);
  }

  GetByCode(code: string): Observable<GetByTransactionsInCodeResDto> {
    return this.http.get<GetByTransactionsInCodeResDto>('http://localhost:8888/transactions-in/code?code=' + code);
  }

  insertAll(saveFullTransactionsInReqDto: SaveFullTransactionsInReqDto): Observable<SaveFullTransactionsInResDto>{
    return this.http.post<SaveFullTransactionsInResDto>('http://localhost:8888/transactions-in/', saveFullTransactionsInReqDto);
  }
}
