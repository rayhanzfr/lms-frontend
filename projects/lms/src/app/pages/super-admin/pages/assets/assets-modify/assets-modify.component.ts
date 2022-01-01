import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assets } from 'projects/core/src/app/dto/asset/assets';
import { SaveAssetsReqDto } from 'projects/core/src/app/dto/asset/save-assets-req-dto';
import { SaveAssetsResDto } from 'projects/core/src/app/dto/asset/save-assets-res-dto';
import { UpdateAssetsResDto } from 'projects/core/src/app/dto/asset/update-assets-res-dto';
import { Invoices } from 'projects/core/src/app/dto/invoices/invoices';
import { Items } from 'projects/core/src/app/dto/items/items';
import { StatusesAssets } from 'projects/core/src/app/dto/statuses-assets/statuses-assets';
import { StatusesInOut } from 'projects/core/src/app/dto/statuses-in-out/statuses-in-out';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { InvoicesService } from 'projects/core/src/app/services/invoices/invoices.service';
import { ItemsService } from 'projects/core/src/app/services/items/items.service';
import { StatusesAssetsService } from 'projects/core/src/app/services/statuses-assets/statuses-assets.service';
import { StatusesInOutService } from 'projects/core/src/app/services/statuses-in-out/statuses-in-out.service';
import { Subscription } from 'rxjs';
import { PrimeNGConfig } from 'primeng/api';

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
  assets:Assets = new Assets()
  saveAssetReq:SaveAssetsReqDto= new SaveAssetsReqDto()
  items:Items[] = []
  itemsReq:Items = new Items()
  invoices:Invoices[] = []
  invoicesReq:Invoices = new Invoices()
  statusesAssetsReq:StatusesAssets = new StatusesAssets()
  statusesAssets:StatusesAssets[] = []
  statusesInOutReq:StatusesInOut = new StatusesInOut()
  statusesInOut:StatusesInOut[] = []

  updateResDto : UpdateAssetsResDto = new UpdateAssetsResDto()

  saveResDto: SaveAssetsResDto = new SaveAssetsResDto()


  isUpdate:boolean = false
  itemsSub?:Subscription
  invoicesSub?:Subscription
  statusesAssetsSub?:Subscription
  statusesInOutSub?:Subscription
  constructor(private primengConfig: PrimeNGConfig,private assetsService:AssetsService, private itemsService:ItemsService, private invoicesService: InvoicesService, private statusesInOutService:StatusesInOutService, private statusesAssetsService:StatusesAssetsService, private router: Router, private activeRoute: ActivatedRoute) { }
  ngOnDestroy(): void {
    this.assetsSub?.unsubscribe()
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    const assetsName:any= this.activeRoute.snapshot.paramMap.get('assetsName')
    if(assetsName){
      this.assetsSub = this.assetsService.getByAssetsName(assetsName).subscribe(result=>{
        this.assets=result.data
        this.isUpdate = true
        this.saveAssetReq.assetsName = this.assets.assetsName
        this.saveAssetReq.assetsExpired = this.assets.assetsExpired
        this.saveAssetReq.invoicesCode = this.assets.invoicesCode
        this.saveAssetReq.itemsCode = this.assets.itemsCode
        this.saveAssetReq.statusesAssetsCode = this.assets.statusesAssetsCode
        this.saveAssetReq.statusesInOutCode = this.assets.statusesInOutCode

        this.itemsSub = this.itemsService.getByCode(this.saveAssetReq.itemsCode).subscribe(result=>{
          this.itemsReq = result
        })
        this.invoicesSub = this.invoicesService.getByCode(this.saveAssetReq.invoicesCode).subscribe(result=>{
          this.invoicesReq = result
        })
        
      })
    }
    this.itemsSub = this.itemsService.getAll().subscribe(result=>{
      this.items = result
    })
    this.invoicesSub = this.invoicesService.getAll().subscribe(result=>{
      this.invoices = result
    })
    this.statusesAssetsSub = this.statusesAssetsService.getAll().subscribe(result=>{
      this.statusesAssets = result
    })
    this.statusesInOutSub = this.statusesInOutService.getAll().subscribe(result=>{
      this.statusesInOut = result
    })
  }

  getItemsCode(items:Items):void{
    this.saveAssetReq.itemsCode = items.itemsCode
  }
  getInvoicesCode(invoices:Invoices):void{
    this.saveAssetReq.invoicesCode = invoices.invoicesCode
  }
  getStatusesAssetsCode(statusesAssets:StatusesAssets):void{
    this.saveAssetReq.statusesAssetsCode = statusesAssets.statusesAssetsCode
  }
  getStatusesInOutCode(statusesInOut:StatusesInOut):void{
    this.saveAssetReq.statusesInOutCode = statusesInOut.statusesInOutCode
  }

  submit(): void {
    this.saveAssetReq.itemsCode = this.itemsReq.itemsCode
    this.saveAssetReq.invoicesCode = this.invoicesReq.invoicesCode
    this.saveAssetReq.statusesAssetsCode = this.statusesAssetsReq.statusesAssetsCode
    this.saveAssetReq.statusesInOutCode = this.statusesInOutReq.statusesInOutCode
    console.log(this.saveAssetReq)
    this.assetsService.save(this.saveAssetReq).subscribe(result=>{
      this.saveResDto = result
      if (this.saveResDto) {
        this.router.navigateByUrl("/admin/assets")
      }
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
