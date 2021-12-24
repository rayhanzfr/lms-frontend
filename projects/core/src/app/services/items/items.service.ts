import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllItemsResDto } from '../../dto/items/get-all-items-res-dto';
import { GetByCodeItemsResDto } from '../../dto/items/get-by-code-items-res-dto';
import { GetByIdItemsResDto } from '../../dto/items/get-by-id-items-res-dto';
import { Items } from '../../dto/items/items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<GetAllItemsResDto>{
    return this.http.get<GetAllItemsResDto>('http://localhost:8888/items/')
  }

  getByCode(): Observable<GetByCodeItemsResDto>{
    return this.http.get<GetByCodeItemsResDto>('http://localhost:8888/items/id')
  }

  getById(): Observable<GetByIdItemsResDto>{
    return this.http.get<GetByIdItemsResDto>('http://localhost:8888/items/code')
  }

  save(items: Items): Observable<Items>{
    return this.http.post<Items>('http://localhost:8888/items/', items)
  }

  update(items: Items): Observable<Items>{
    return this.http.put<Items>('http://localhost:8888/items/', items)
  }

  delete(id: string): Observable<Items>{
    return this.http.delete<Items>('http://localhost:8888/items/' + id)
  }
}
