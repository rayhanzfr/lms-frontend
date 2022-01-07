import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  // loadingSub = new BehaviorSubject<boolean>(false)
  // loadings : Map<string,boolean> = new Map<string,boolean>();
  constructor() { }
// setLoading(loading:boolean,url:string):void{
//   if(!url){
//     throw new Error('No URL in Loading Service')
//   }
//   if(loading===true){
//     this.loadings.set(url,loading);
//     this.loadingSub.next(true)
//   }
//   else if(loading===false && this.loadings.has(url)){
//     this.loadings.delete(url);
//   }
//   if(this.loadings.size ===0){
//     this.loadingSub.next(false)
//   }
// }
}
