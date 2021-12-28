import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assets } from 'projects/core/src/app/dto/asset/assets';
import { GetAllAssetsResDto } from 'projects/core/src/app/dto/asset/get-all-assets-res-dto';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';

@Component({
  selector: 'app-assets-view',
  templateUrl: './assets-view.component.html',
  styleUrls: ['./assets-view.component.css']
})
export class AssetsViewComponent implements OnInit {

  data:GetAllAssetsResDto = new GetAllAssetsResDto()
  totalAssets!:number
  borrowedAssets!:number
  readyAssets!:number
  brokenAssets!:number
  constructor(private router: Router, private assetsService: AssetsService) { }


  ngOnInit(): void {
    this.assetsService.getAll().subscribe(result=>{
      this.data = result
      this.totalAssets = this.data.data.length
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
}
