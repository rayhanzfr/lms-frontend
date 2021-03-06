import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Assets } from 'projects/core/src/app/dto/asset/assets'
import { SaveAssetsReqDto } from 'projects/core/src/app/dto/asset/save-assets-req-dto'
import { SaveAssetsResDto } from 'projects/core/src/app/dto/asset/save-assets-res-dto'
import { UpdateAssetsResDto } from 'projects/core/src/app/dto/asset/update-assets-res-dto'
import { Invoices } from 'projects/core/src/app/dto/invoices/invoices'
import { Items } from 'projects/core/src/app/dto/items/items'
import { StatusesAssets } from 'projects/core/src/app/dto/statuses-assets/statuses-assets'
import { StatusesInOut } from 'projects/core/src/app/dto/statuses-in-out/statuses-in-out'
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service'
import { InvoicesService } from 'projects/core/src/app/services/invoices/invoices.service'
import { ItemsService } from 'projects/core/src/app/services/items/items.service'
import { StatusesAssetsService } from 'projects/core/src/app/services/statuses-assets/statuses-assets.service'
import { StatusesInOutService } from 'projects/core/src/app/services/statuses-in-out/statuses-in-out.service'
import { Subscription } from 'rxjs'
import { MessageService, PrimeNGConfig } from 'primeng/api'
import { UpdateAssetsReqDto } from 'projects/core/src/app/dto/asset/update-assets-req-dto'
import { CompaniesService } from 'projects/core/src/app/services/companies/companies.service'
import { Companies } from '../../../../../../../../core/src/app/dto/companies/companies'
import { AuthService } from '../../../../../../../../core/src/app/services/auth/auth.service'
import { roleCode } from '../../../../../../../../core/src/app/constant/rolecode'

@Component({
  selector: 'app-assets-modify',
  templateUrl: './assets-modify.component.html',
  styleUrls: ['./assets-modify.component.css'],
  providers: [MessageService],
})
export class AssetsModifyComponent implements OnInit, OnDestroy {
  assetsSub?: Subscription
  date!: Date
  assets: Assets = new Assets()
  updateAssetsReq: UpdateAssetsReqDto = new UpdateAssetsReqDto()
  saveAssetReq: SaveAssetsReqDto = new SaveAssetsReqDto()
  items: Items[] = []
  itemsReq: Items = new Items()
  invoices: Invoices[] = []
  invoicesReq: Invoices = new Invoices()
  statusesAssetsReq: StatusesAssets = new StatusesAssets()
  statusesAssets: StatusesAssets[] = []
  statusesInOutReq: StatusesInOut = new StatusesInOut()
  statusesInOut: StatusesInOut[] = []
  companies: Companies[] = []
  companiesReq: Companies = new Companies()

  updateResDto: UpdateAssetsResDto = new UpdateAssetsResDto()

  saveResDto: SaveAssetsResDto = new SaveAssetsResDto()

  roles!:string
  isNonAdmin=false
  isUpdate: boolean = false
  itemsSub?: Subscription
  invoicesSub?: Subscription
  statusesAssetsSub?: Subscription
  statusesInOutSub?: Subscription
  companiesSubs?: Subscription
  constructor(
    private assetsService: AssetsService,
    private itemsService: ItemsService,
    private invoicesService: InvoicesService,
    private statusesInOutService: StatusesInOutService,
    private statusesAssetsService: StatusesAssetsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private companiesService: CompaniesService,
    private messageService: MessageService,
    private authService: AuthService
  ) {}
  ngOnDestroy(): void {
    this.assetsSub?.unsubscribe()
    this.itemsSub?.unsubscribe()
    this.companiesSubs?.unsubscribe()
    this.invoicesSub?.unsubscribe()
    this.statusesInOutSub?.unsubscribe()
    this.statusesAssetsSub?.unsubscribe()
  }

  ngOnInit(): void {
    this.roles = this.authService.getRolesCode()!
    if(this.roles==roleCode.get(2)){
      this.isNonAdmin=true
    }
    const assetsName: any = this.activeRoute.snapshot.paramMap.get('code')
    if (assetsName) {
      this.isUpdate = true
      this.assetsSub = this.assetsService
        .getByAssetsName(assetsName)
        .subscribe((result) => {
          this.assets = result.data
          this.saveAssetReq.assetsName = this.assets.assetsName
          this.saveAssetReq.invoicesCode = this.assets.invoicesCode
          this.saveAssetReq.itemsCode = this.assets.itemsCode
          this.saveAssetReq.statusesAssetsCode = this.assets.statusesAssetsCode
          this.saveAssetReq.statusesInOutCode = this.assets.statusesInOutCode
          this.saveAssetReq.companiesCode = this.assets.companiesCode
          this.itemsSub = this.itemsService
            .getByCode(this.saveAssetReq.itemsCode)
            .subscribe((result) => {
              this.itemsReq = result
            })
          this.invoicesSub = this.invoicesService
            .getByCode(this.saveAssetReq.invoicesCode)
            .subscribe((result) => {
              this.invoicesReq = result
            })
          this.statusesAssetsSub = this.statusesAssetsService
            .getByCode(this.saveAssetReq.statusesAssetsCode)
            .subscribe((result) => {
              this.statusesAssetsReq = result
            })
          this.statusesInOutSub = this.statusesInOutService
            .getByCode(this.saveAssetReq.statusesInOutCode)
            .subscribe((result) => {
              this.statusesInOutReq = result
            })
          this.companiesSubs = this.companiesService
            .getByCode(this.saveAssetReq.companiesCode)
            .subscribe((result) => {
              this.companiesReq = result
            })
        })
    }
    this.itemsSub = this.itemsService.getAll().subscribe((result) => {
      this.items = result
    })
    this.invoicesSub = this.invoicesService.getAll().subscribe((result) => {
      this.invoices = result
    })
    this.statusesAssetsSub = this.statusesAssetsService
      .getAll()
      .subscribe((result) => {
        this.statusesAssets = result
      })
    this.statusesInOutSub = this.statusesInOutService
      .getAll()
      .subscribe((result) => {
        this.statusesInOut = result
      })
    this.companiesSubs = this.companiesService.getAll().subscribe((result) => {
      this.companies = result
    })
  }

  getItemsCode(items: Items): void {
    this.saveAssetReq.itemsCode = items.itemsCode
  }
  getInvoicesCode(invoices: Invoices): void {
    this.saveAssetReq.invoicesCode = invoices.invoicesCode
  }
  getStatusesAssetsCode(statusesAssets: StatusesAssets): void {
    this.saveAssetReq.statusesAssetsCode = statusesAssets.statusesAssetsCode
  }
  getStatusesInOutCode(statusesInOut: StatusesInOut): void {
    this.saveAssetReq.statusesInOutCode = statusesInOut.statusesInOutCode
  }

  submit(): void {
    if (this.assets.assetsName) {
      this.updateAssetsReq.id = this.assets.id
      this.updateAssetsReq.isActive = this.assets.isActive
      this.updateAssetsReq.version = this.assets.version
      this.updateAssetsReq.assetsName = this.saveAssetReq.assetsName
      this.updateAssetsReq.itemsCode = this.saveAssetReq.itemsCode
      this.updateAssetsReq.invoicesCode = this.saveAssetReq.invoicesCode
      this.updateAssetsReq.statusesAssetsCode = this.statusesAssetsReq.statusesAssetsCode
      this.updateAssetsReq.statusesInOutCode = this.statusesInOutReq.statusesInOutCode
      this.updateAssetsReq.assetsExpired = this.saveAssetReq.assetsExpired
      this.assetsSub = this.assetsService
        .update(this.updateAssetsReq)
        .subscribe((result) => {
          this.updateResDto = result
          if (this.updateResDto) {
            this.messageService.add({
              severity: 'success',
              summary: 'Updated',
              detail: '' + this.updateResDto.message,
            })
            setTimeout(() => this.router.navigateByUrl('/admin/assets'), 1000)
          }
        })
    } else {
      this.saveAssetReq.itemsCode = this.itemsReq.itemsCode
      this.saveAssetReq.invoicesCode = this.invoicesReq.invoicesCode
      this.saveAssetReq.companiesCode = this.companiesReq.companiesCode
      this.saveAssetReq.statusesAssetsCode = this.statusesAssetsReq.statusesAssetsCode
      this.saveAssetReq.statusesInOutCode = this.statusesInOutReq.statusesInOutCode
      this.assetsSub = this.assetsService
        .save(this.saveAssetReq)
        .subscribe((result) => {
          this.saveResDto = result
          if (this.saveResDto) {
            this.messageService.add({
              severity: 'success',
              summary: 'Save',
              detail: '' + this.saveResDto.message,
            })
            setTimeout(() => this.router.navigateByUrl('/admin/assets'), 1000)
          }
        })
    }
  }

  back() {
    this.router.navigateByUrl('/admin/assets')
  }

  newItems(): void {
    this.router.navigate([]).then((result) => {
      window.open('/admin/items/new', '_blank')
    })
  }
  newInvoices(): void {
    this.router.navigate([]).then((result) => {
      window.open('/admin/invoices/new', '_blank')
    })
  }
}
