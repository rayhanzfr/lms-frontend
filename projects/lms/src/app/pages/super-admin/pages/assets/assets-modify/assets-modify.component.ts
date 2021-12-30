import { Component, OnDestroy, OnInit } from '@angular/core';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-assets-modify',
  templateUrl: './assets-modify.component.html',
  styleUrls: ['./assets-modify.component.css']
})
export class AssetsModifyComponent implements OnInit, OnDestroy {

  file!: File | null
  selectedFiles!: FileList
  assetsSub?:Subscription
  date!:Date;
  expiredAssets!:string

  constructor(private assetsService:AssetsService) { }
  ngOnDestroy(): void {
    this.assetsSub?.unsubscribe()
  }

  ngOnInit(): void {
  }

  upload(){
    this.file = this.selectedFiles?.item(0)
    this.assetsSub = this.assetsService.upload(this.file)?.subscribe()
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  getDate():void{
    let day = this.date.getDate()
    let month = this.date.getMonth()+1
    let year = this.date.getFullYear
    this.expiredAssets = day+'-'+month+'-'+year;
  }

}
