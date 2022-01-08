import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api'
import { Companies } from 'projects/core/src/app/dto/companies/companies'
import { DeleteCompaniesResDto } from 'projects/core/src/app/dto/companies/delete-companies-res-dto'
import { CompaniesService } from 'projects/core/src/app/services/companies/companies.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-companies-view',
  templateUrl: './companies-view.component.html',
  providers: [ConfirmationService, MessageService],
})
export class CompaniesViewComponent implements OnInit, OnDestroy {
  obs?: Subscription
  data: Companies[] = []
  resDeleteCompanies?: DeleteCompaniesResDto
  totalData!: number
  showImg: boolean = true

  constructor(
    private router: Router,
    private companiesService: CompaniesService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {}
  ngOnDestroy(): void {
    this.obs?.unsubscribe
  }

  ngOnInit(): void {
    this.companiesService.getAll().subscribe((result) => {
      this.data = result
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].files != null) {
          this.showImg = false
        }
      }
    })
  }

  gotoInsert() {
    this.router.navigateByUrl('admin/companies/new')
  }

  gotoUpdate(code: string): void {
    this.router.navigateByUrl(`admin/companies/${code}`)
  }

  delete(id: string) {
    if (confirm('Are you sure?')) {
      this.companiesService.delete(id).subscribe((result) => {
        this.resDeleteCompanies = result
      })
    }
  }

  confirm(id: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this companies?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.companiesService.delete(id).subscribe((result) => {
          this.resDeleteCompanies = result
        })
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have deleted',
        })
        setTimeout(() => this.reloadCurrentRoute(), 1000)
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            })
            break
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            })
            break
        }
      },
    })
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}
}
