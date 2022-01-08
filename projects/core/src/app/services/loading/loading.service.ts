import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
// load?:Observer<boolean|null>
// load$?:Observable<boolean|null>
//   constructor() {
//     this.load$ = new Observable<boolean|null>(
//       obs => this.load=obs
//     )
//    }

//   loading(loading:boolean|null):void{
//     this.load?.next(loading)
//   }
private _loading: boolean = false;
loadingStatus:Subject<boolean> = new Subject()

get loading():boolean {
  return this._loading;
}

set loading(value) {
  this._loading = value;
  this.loadingStatus.next(value);
}

startLoading() {
  this.loading = true;
}

stopLoading() {
  this.loading = false;
}
}
