import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {GetAllAssetsResDto} from '../../dto/asset/get-all-assets-res-dto'
import {GetByIdAssetsResDto} from '../../dto/asset/get-by-id-assets-res-dto'
import {GetTotalAssetsReqDto} from '../../dto/asset/get-total-assets-req-dto'
import {SaveAssetsReqDto} from '../../dto/asset/save-assets-req-dto'
import { SaveAssetsResDto } from '../../dto/asset/save-assets-res-dto';
import { UpdateAssetsReqDto } from '../../dto/asset/update-assets-req-dto';
import { UpdateAssetsResDto } from '../../dto/asset/update-assets-res-dto';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private http: HttpClient) { }

  getAll():Observable<GetAllAssetsResDto> {
    return this.http.get<GetAllAssetsResDto>('http://localhost:8888/assets/')
  }

  getById(id:string): Observable<GetByIdAssetsResDto>{
    return this.http.get<GetByIdAssetsResDto>('http://localhost:8888/assets/id?id='+id)
  }
  getByAssetsName(assetName:string):Observable<GetByIdAssetsResDto>{
    return this.http.get<GetByIdAssetsResDto>('http://localhost:8888/assets/assetsName?assetsName='+assetName)
  }
  getByItemsCode(itemsCode:String):Observable<GetAllAssetsResDto>{
    return this.http.get<GetAllAssetsResDto>('http://localhost:8888/assets/items?itemsCode='+itemsCode)
  }

  getByItemsBrandsCode(brandsCode:string):Observable<GetAllAssetsResDto>{
    return this.http.get<GetAllAssetsResDto>('http://localhost:8888/assets/itemsBrands?itemsBrandsCode='+brandsCode)
  } 

  getByItemsTypecode(itemsTypecode:string):Observable<GetAllAssetsResDto>{
    return this.http.get<GetAllAssetsResDto>('http://localhost:8888/assets/itemsTypes?itemsTypesCode='+itemsTypecode)
  }
  getByStatusAssets(statusAssetsCode:string):Observable<GetAllAssetsResDto>{
    return this.http.get<GetAllAssetsResDto>('http://localhost:8888/assets/statusesAssets?statusesAssetsCode='+statusAssetsCode)
  }
  getByStatusInOut(statusesInOutCode:string):Observable<GetAllAssetsResDto>{
    return this.http.get<GetAllAssetsResDto>('http://localhost:8888/assets/statusesInOut?statusesInOut='+statusesInOutCode)
  }
  getByReq(itemsCode:string, itemsTypesCode:string, brandsCode:string, statusesAssetsCode:string, statusesInOutCode:string, total:number):Observable<GetTotalAssetsReqDto>{
    return this.http.get<GetTotalAssetsReqDto>(`http://localhost:8888/req?itemsCode=${itemsCode}&itemsTypesCode=${itemsTypesCode}&itemsBrandsCode=${brandsCode}&statusesAssetsCode=${statusesAssetsCode}&statusesInOutCode=${statusesInOutCode}&total=${total}`)
  }

  save(save:SaveAssetsReqDto):Observable<SaveAssetsResDto>{
    return this.http.post<SaveAssetsResDto>('http://localhost:8888/assets',save)
  }

  upload(file: File | null):Observable<any>{
    const formData = new FormData();
    formData.append('file', file!);
    return this.http.post<any>('http://localhost:8888/assets/upload', formData)
  }

  update(update:UpdateAssetsReqDto):Observable<UpdateAssetsResDto>{
    return this.http.put<UpdateAssetsResDto>('http://localhost:8888/assets',update)
    }
}
