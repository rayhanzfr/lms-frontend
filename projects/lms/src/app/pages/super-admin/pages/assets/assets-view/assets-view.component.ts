import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assets } from 'projects/core/src/app/dto/asset/assets';
import { GetAllAssetsResDto } from 'projects/core/src/app/dto/asset/get-all-assets-res-dto';
import { SaveAssetsResDto } from 'projects/core/src/app/dto/asset/save-assets-res-dto';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-assets-view',
  templateUrl: './assets-view.component.html',
  styleUrls: ['./assets-view.component.css']
})
export class AssetsViewComponent implements OnInit {

  data:GetAllAssetsResDto = new GetAllAssetsResDto()
  newAssets:GetAllAssetsResDto = new GetAllAssetsResDto()
  totalAssets!:number
  borrowedAssets!:number
  readyAssets!:number
  brokenAssets!:number
  file!: File | null
  selectedFiles!: FileList

  assetsSub?:Subscription

  saveResDto:SaveAssetsResDto = new SaveAssetsResDto()

  saveResSub?:Subscription
  constructor(private router: Router, private assetsService: AssetsService) { }


  ngOnInit(): void {
    this.assetsService.getAll().subscribe(result=>{
      this.data = result
      this.totalAssets = this.data.data.length
    })
    this.assetsService.newAssets().subscribe(result=>{
      this.newAssets = result
    })
    this.assetsService.getByStatusInOut("COUT").subscribe(result=>{
      this.borrowedAssets = result.data.length
    })
    this.assetsService.getByStatusAssets("DEP").subscribe(result=>{
      this.readyAssets = result.data.length
    })
    this.assetsService.getByStatusAssets("ARCHV").subscribe(result=>{
      this.brokenAssets = result.data.length
    })
  }

  gotoInsert():void{
    this.router.navigateByUrl('/admin/assets/new')
  }

  gotoUpdate(i:string):void{
    this.router.navigateByUrl(`admin/assets/${i}`)
  }

  onUpload(event: any):void{
    this.saveResSub = this.assetsService.upload(event).subscribe(result=>{
      this.saveResDto = result;
    })
  }

  upload(){
    this.file = this.selectedFiles?.item(0)
    this.assetsSub = this.assetsService.upload(this.file)?.subscribe()
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }
}
