import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteItemsTypesResDto } from '../../dto/items-types/delete-items-types-res-dto';
import { ItemsTypes } from '../../dto/items-types/items-types';
import { SaveItemsTypesResDto } from '../../dto/items-types/save-items-types-res-dto';
import { UpdateItemsTypesResDto } from '../../dto/items-types/update-items-types-res-dto';

@Injectable({
  providedIn: 'root'
})
export class ItemsTypesService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<ItemsTypes[]>{
    return this.http.get<ItemsTypes[]>('http://localhost:8888/items-types/')
  }

  getByCode(code: string): Observable<ItemsTypes>{
    return this.http.get<ItemsTypes>('http://localhost:8888/items-types/code/?code='+code)
  }

  getById(id:string): Observable<ItemsTypes>{
    return this.http.get<ItemsTypes>('http://localhost:8888/items-types/id/?id='+id)
  }

  save(itemsTypes: ItemsTypes): Observable<SaveItemsTypesResDto>{
    return this.http.post<SaveItemsTypesResDto>('http://localhost:8888/items-types/', itemsTypes)
  }

  update(itemsTypes: ItemsTypes): Observable<UpdateItemsTypesResDto>{
    return this.http.put<UpdateItemsTypesResDto>('http://localhost:8888/items-types/', itemsTypes)
  }

  delete(id: string): Observable<DeleteItemsTypesResDto>{
    return this.http.delete<DeleteItemsTypesResDto>('http://localhost:8888/items-types/' + id)
  }
}