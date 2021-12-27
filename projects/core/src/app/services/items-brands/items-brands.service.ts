import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteItemsBrandsResDto } from '../../dto/items-brands/delete-items-brands-res-dto';
import { GetAllItemsBrandsResDto } from '../../dto/items-brands/get-all-items-brands-res-dto';
import { GetByCodeItemsBrandsResDto } from '../../dto/items-brands/get-by-code-items-brands-res-dto';
import { GetByIdItemsBrandsResDto } from '../../dto/items-brands/get-by-id-items-brands-res-dto';
import { ItemsBrands } from '../../dto/items-brands/items-brands';

@Injectable({
  providedIn: 'root'
})
export class ItemsBrandsService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<ItemsBrands[]>{
    return this.http.get<ItemsBrands[]>('http://localhost:8888/items-brands/')
  }

  getByCode(code: string): Observable<ItemsBrands>{
    return this.http.get<ItemsBrands>('http://localhost:8888/items-brands/code/?code='+code)
  }

  getById(id:string): Observable<ItemsBrands>{
    return this.http.get<ItemsBrands>('http://localhost:8888/items-brands/id/?id='+id)
  }

  save(itemsBrands: ItemsBrands): Observable<ItemsBrands>{
    return this.http.post<ItemsBrands>('http://localhost:8888/items-brands/', itemsBrands)
  }

  update(itemsBrands: ItemsBrands): Observable<ItemsBrands>{
    return this.http.put<ItemsBrands>('http://localhost:8888/items-brands/', itemsBrands)
  }

  delete(id: string): Observable<DeleteItemsBrandsResDto>{
    return this.http.delete<DeleteItemsBrandsResDto>('http://localhost:8888/items-brands/' + id)
  }
}
