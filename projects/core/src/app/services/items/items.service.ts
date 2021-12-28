import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteItemsResDto } from '../../dto/items/delete-items-res-dto';
import { GetAllItemsResDto } from '../../dto/items/get-all-items-res-dto';
import { GetByCodeItemsResDto } from '../../dto/items/get-by-code-items-res-dto';
import { GetByIdItemsResDto } from '../../dto/items/get-by-id-items-res-dto';
import { Items } from '../../dto/items/items';
import { SaveItemsResDto } from '../../dto/items/save-items-res-dto';
import { UpdateItemsResDto } from '../../dto/items/update-items-res-dto';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Items[]>{
    return this.http.get<Items[]>('http://localhost:8888/items/')
  }

  getByCode(code: string): Observable<Items>{
    return this.http.get<Items>('http://localhost:8888/items/code/?code='+code)
  }

  getById(id:string): Observable<Items>{
    return this.http.get<Items>('http://localhost:8888/items/id/?id='+id)
  }

  save(items: Items, file: File | null): Observable<SaveItemsResDto>{
    const formData: FormData = new FormData();
    formData.append('data', JSON.stringify(items));
    formData.append('file', file!);
    console.log(file)
    return this.http.post<SaveItemsResDto>('http://localhost:8888/items/', formData)
  }

  update(items: Items, file: File | null): Observable<UpdateItemsResDto>{
    const formData: FormData = new FormData();
    formData.append('data', JSON.stringify(items));
    formData.append('file', file!);
    console.log(file)
    return this.http.put<UpdateItemsResDto>('http://localhost:8888/items/', formData)
  }

  delete(id: string): Observable<DeleteItemsResDto>{
    return this.http.delete<DeleteItemsResDto>('http://localhost:8888/items/' + id)
  }
}
