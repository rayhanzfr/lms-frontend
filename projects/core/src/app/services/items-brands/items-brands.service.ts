import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllItemsBrandsResDto } from '../../dto/items-brands/get-all-items-brands-res-dto';
import { GetByCodeItemsBrandsResDto } from '../../dto/items-brands/get-by-code-items-brands-res-dto';
import { GetByIdItemsBrandsResDto } from '../../dto/items-brands/get-by-id-items-brands-res-dto';
import { ItemsBrands } from '../../dto/items-brands/items-brands';

@Injectable({
  providedIn: 'root'
})
export class ItemsBrandsService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<GetAllItemsBrandsResDto>{
    return this.http.get<GetAllItemsBrandsResDto>('http://localhost:8888/items-brands/')
  }

  getByCode(): Observable<GetByCodeItemsBrandsResDto>{
    return this.http.get<GetByCodeItemsBrandsResDto>('http://localhost:8888/items-brands/id')
  }

  getById(): Observable<GetByIdItemsBrandsResDto>{
    return this.http.get<GetByIdItemsBrandsResDto>('http://localhost:8888/items-brands/code')
  }

  save(itemsBrands: ItemsBrands): Observable<ItemsBrands>{
    return this.http.post<ItemsBrands>('http://localhost:8888/items-brands/', itemsBrands)
  }

  update(itemsBrands: ItemsBrands): Observable<ItemsBrands>{
    return this.http.put<ItemsBrands>('http://localhost:8888/items-brands/', itemsBrands)
  }

  delete(id: string): Observable<ItemsBrands>{
    return this.http.delete<ItemsBrands>('http://localhost:8888/items-brands/' + id)
  }
}
