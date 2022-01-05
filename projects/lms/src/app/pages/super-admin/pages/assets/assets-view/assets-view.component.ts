import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { GetAllAssetsResDto } from 'projects/core/src/app/dto/asset/get-all-assets-res-dto';
import { SaveAssetsResDto } from 'projects/core/src/app/dto/asset/save-assets-res-dto';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-assets-view',
  templateUrl: './assets-view.component.html',
  styleUrls: ['./assets-view.component.css'],
  providers: [MessageService]
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

  isNew:boolean=false

  assetsSub?:Subscription

  saveResDto:SaveAssetsResDto = new SaveAssetsResDto()
  companiesCode!:string
  saveResSub?:Subscription
  constructor(private router: Router, private assetsService: AssetsService,private messageService: MessageService, private employeesService:EmployeesService) { }


  ngOnInit(): void {
    this.employeesService.getByUsersId().subscribe(data => {
      this.companiesCode = data.companies.companiesCode
      this.assetsSub = this.assetsService.getByCompaniesCode(this.companiesCode).subscribe(asset => {
        this.data = asset
        this.assetsSub =    this.assetsService.getByStatusAssets("ARCHV").subscribe(asset => {
          this.loseAssets = asset.data.length
        })
        if(this.data){
          this.assetsSub = this.assetsService.newAssets().subscribe(result=>{
            this.newAssets = result
            this.isNew = true
          })
        }
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
      if(this.saveResDto){
        this.showSuccess
      }else{
        this.showError()
      }
      this.reloadCurrentPage()
    })
  }
  reloadCurrentPage() {
    window.location.reload();
   }

   showSuccess():void{
     this.messageService.add({
       severity:'success',
       summary:'Uploaded',
       detail:'Uploaded Success'
     })
    }
   showError():void{
     this.messageService.add({
       severity:'error',
       summary:'Failed',
       detail:'Uploaded Failed'
     })
   }
}
