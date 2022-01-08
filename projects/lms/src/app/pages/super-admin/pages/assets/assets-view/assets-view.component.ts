import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { saveAs } from 'file-saver'
import { ConfirmationService, MessageService } from 'primeng/api'
import { GetAllAssetsResDto } from 'projects/core/src/app/dto/asset/get-all-assets-res-dto'
import { SaveAssetsResDto } from 'projects/core/src/app/dto/asset/save-assets-res-dto'
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service'
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service'
import { Subscription } from 'rxjs'
import {statusesAssetsCode} from '../../../../../../../../core/src/app/constant/statuses-assets-code'

@Component({
  selector: 'app-assets-view',
  templateUrl: './assets-view.component.html',
  styleUrls: ['./assets-view.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class AssetsViewComponent implements OnInit, OnDestroy {
  data: GetAllAssetsResDto = new GetAllAssetsResDto()
  newAssets: GetAllAssetsResDto = new GetAllAssetsResDto()
  loseAssets!: number
  borrowedAssets!: number
  readyAssets!: number
  brokenAssets!: number
  file!: File | null
  selectedFiles!: FileList
  
  isNew: boolean = false

  assetsSub?: Subscription

  saveResDto: SaveAssetsResDto = new SaveAssetsResDto()
  companiesCode!: string
  saveResSub?: Subscription
  
  constructor(
    private router: Router,
    private assetsService: AssetsService,
    private messageService: MessageService, private confirmationService: ConfirmationService
    ) {}
  ngOnDestroy(): void {
    this.saveResSub?.unsubscribe()
    this.assetsSub?.unsubscribe()
  }

  ngOnInit(): void {
    this.assetsSub = this.assetsService.getAll().subscribe((asset) => {
      this.data = asset
      this.assetsSub = this.assetsService
        .getByStatusAssets('ARCHV')
        .subscribe((asset) => {
          this.loseAssets = asset.data.length
        })
      if (this.data || this.data !== null) {
        this.assetsSub = this.assetsService.newAssets().subscribe((result) => {
          this.newAssets = result
          this.isNew = true
        })
      }
      this.assetsSub = this.assetsService
        .getByStatus('UNDEP', 'COUT')
        .subscribe((result) => {
          this.borrowedAssets = result.data.length
        })
      this.assetsSub = this.assetsService
        .getByStatusAssets(statusesAssetsCode.get(1)!)
        .subscribe((result) => {
          this.readyAssets = result.data.length
        })
      this.assetsSub = this.assetsService
        .getByStatus('UNDEP', 'CIN')
        .subscribe((result) => {
          this.brokenAssets = result.data.length
        })
    })
  }

  gotoInsert(): void {
    this.router.navigateByUrl('/admin/assets/new')
  }

  gotoUpdate(i: string): void {
    this.router.navigateByUrl(`admin/assets/${i}`)
  }

  onUpload(event: any): void {
    for (let file of event.files) {
      this.file = file
    }
    if (this.file) {
      this.saveResSub = this.assetsService
        .upload(this.file)
        .subscribe((data) => {
          this.saveResDto = data
          if (this.saveResDto) {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: '' + this.saveResDto.message,
            })
            setTimeout(() => this.reloadCurrentRoute(), 2000)
          }
        })
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Message Content',
      })
    }
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}
}
