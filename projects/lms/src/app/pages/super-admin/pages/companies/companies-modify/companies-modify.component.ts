import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { MessageService } from 'primeng/api'
import { Companies } from 'projects/core/src/app/dto/companies/companies'
import { SaveCompaniesResDto } from 'projects/core/src/app/dto/companies/save-companies-res-dto'
import { UpdateCompaniesResDto } from 'projects/core/src/app/dto/companies/update-companies-res-dto'
import { CompaniesService } from 'projects/core/src/app/services/companies/companies.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-companies-modify',
  templateUrl: './companies-modify.component.html',
  styleUrls: ['./companies-modify.component.css'],
  providers: [MessageService],
})
export class CompaniesModifyComponent implements OnInit, OnDestroy {
  companies?: Companies
  companiesReq: Companies = new Companies()
  saveCompaniesRes: SaveCompaniesResDto = new SaveCompaniesResDto()
  updateCompaniesRes: UpdateCompaniesResDto = new UpdateCompaniesResDto()
  companiesSubs?: Subscription
  companiesSub?: Subscription
  companiesCode!: string
  file!: File | null
  selectedFiles!: FileList
  submitted=false
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private companiesService: CompaniesService,
    private messageService: MessageService,
  ) {}
  ngOnDestroy(): void {
    this.companiesSubs?.unsubscribe()
    this.companiesSub?.unsubscribe()
  }

  ngOnInit(): void {
    const code: any = this.router.snapshot.paramMap.get('code')
    if (code) {
      this.companies = new Companies()
      this.companiesSub = this.companiesService
        .getByCode(code)
        .subscribe((result) => {
          this.companies = result
          this.companiesReq = this.companies
          this.companiesCode = code
        })
    }
  }

  submitData() {
    this.submitted=true
    if (
      this.companiesReq.companiesName == null ||
      this.companiesReq.companiesPhone == null ||
      this.companiesReq.companiesAddress == null || 
      this.file == null
    ) {
      this.messageService.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'Please input all form',
      })
    } else {
      if (this.companiesReq.companiesCode) {
        this.file = this.selectedFiles.item(0)
        this.companiesSubs = this.companiesService
          .update(this.companiesReq, this.file)
          ?.subscribe((result) => {
            this.updateCompaniesRes = result
            if (this.updateCompaniesRes) {
              this.messageService.add({
                severity: 'success',
                summary: 'Updated',
                detail: '' + this.updateCompaniesRes.message,
              })
              setTimeout(
                () => this.route.navigateByUrl('admin/companies'),
                1000,
              )
            }
          })
      } else {
        this.file = this.selectedFiles?.item(0)
        this.companiesSubs = this.companiesService
          .save(this.companiesReq, this.file)
          ?.subscribe((result) => {
            this.saveCompaniesRes = result
            if (this.saveCompaniesRes) {
              this.messageService.add({
                severity: 'success',
                summary: 'Created',
                detail: '' + this.saveCompaniesRes.message,
              })
              setTimeout(
                () => this.route.navigateByUrl('admin/companies'),
                1000,
              )
            }
          })
      }
    }
  }

  back() {
    this.route.navigateByUrl('admin/companies')
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files
  }
}
