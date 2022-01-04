import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
  loseAssets!:number
  borrowedAssets!:number
  readyAssets!:number
  brokenAssets!:number
  file!: File | null
  selectedFiles!: FileList

  assetsSub?:Subscription

  saveResDto:SaveAssetsResDto = new SaveAssetsResDto()

  saveResSub?:Subscription
  constructor(private router: Router, private assetsService: AssetsService,private messageService: MessageService) { }


  ngOnInit(): void {
    this.assetsSub = this.assetsService.getAll().subscribe(asset => {
      this.data = asset
      this.assetsSub =    this.assetsService.getByStatusAssets("ARCHV").subscribe(asset => {
        this.loseAssets = asset.data.length
      })
      this.assetsSub =    this.assetsService.newAssets().subscribe(result=>{
        this.newAssets = result
      })
      this.assetsSub =    this.assetsService.getByStatus("UNDEP","COUT").subscribe(result=>{
        this.borrowedAssets = result.data.length
      })
      this.assetsSub =    this.assetsService.getByStatusAssets("DEP").subscribe(result=>{
        this.readyAssets = result.data.length
      })
      this.assetsSub =    this.assetsService.getByStatus("UNDEP","CIN").subscribe(result=>{
        this.brokenAssets = result.data.length
      })
    })
  }

  gotoInsert():void{
    this.router.navigateByUrl('/admin/assets/new')
  }

  gotoUpdate(i:string):void{
    this.router.navigateByUrl(`admin/assets/${i}`)
  }

  upload(){
    this.file = this.selectedFiles?.item(0)
    this.assetsSub = this.assetsService.upload(this.file)?.subscribe()
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  onUpload(event:any):void {
    for (let file of event.files) {
      this.file = file;
    }
    this.uploadFileToActivity();
  }
  uploadFileToActivity() {
    this.saveResSub =  this.assetsService.upload(this.file).subscribe(data => {
      this.saveResDto = data
      this.reloadCurrentPage()
    })
  }
  reloadCurrentPage() {
    window.location.reload();
   }
}
