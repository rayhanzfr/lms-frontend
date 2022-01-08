import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { MessageService } from 'primeng/api'
import { Companies } from 'projects/core/src/app/dto/companies/companies'
import { Locations } from 'projects/core/src/app/dto/locations/locations'
import { SaveLocationsResDto } from 'projects/core/src/app/dto/locations/save-locations-res-dto'
import { UpdateLocationsResDto } from 'projects/core/src/app/dto/locations/update-locations-res-dto'
import { CompaniesService } from 'projects/core/src/app/services/companies/companies.service'
import { LocationsService } from 'projects/core/src/app/services/locations/locations.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-locations-modify',
  templateUrl: './locations-modify.component.html',
  styleUrls: ['./locations-modify.component.css'],
  providers: [MessageService],
})
export class LocationsModifyComponent implements OnInit, OnDestroy {
  locations: Locations = new Locations()
  listCompanies: Companies[] = []
  companies: Companies = new Companies()
  locationsReq: Locations = new Locations()
  saveLocationsRes: SaveLocationsResDto = new SaveLocationsResDto()
  updateLocationsRes: UpdateLocationsResDto = new UpdateLocationsResDto()
  locationsSubs?: Subscription
  locationsSub?: Subscription
  companiesSub?: Subscription
  isHide=true

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private locationsService: LocationsService,
    private companiesService: CompaniesService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    const code: any = this.router.snapshot.paramMap.get('code')
    if (code) {
      this.locationsSub = this.locationsService
        .getByCode(code)
        .subscribe((result) => {
          this.isHide=false
          this.locations = result
          this.locationsReq = this.locations
          this.companies = this.locations.companies
        })
    }

    this.companiesSub = this.companiesService.getAll().subscribe((result) => {
      this.listCompanies = result
    })
  }
  ngOnDestroy(): void {
    this.locationsSubs?.unsubscribe()
    this.locationsSub?.unsubscribe()
  }

  submitData() {
    this.locationsReq.companies = this.companies
    if(this.locationsReq.companies==null||this.locationsReq.locationsDeploy==null){
      this.messageService.add({
        severity: 'error',
        summary: 'Failed',
        detail: 'Please input all form'
      })
    }else{
      if (this.locationsReq.locationsCode) {
        this.locationsSubs = this.locationsService
          .update(this.locationsReq)
          ?.subscribe((result) => {
            this.updateLocationsRes = result
              if (this.updateLocationsRes) {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Updated',
                  detail: '' + this.updateLocationsRes.message,
                })
                setTimeout(
                  () => this.route.navigateByUrl('admin/locations'),
                  2000,
                )
              }
          })
      } else {
        this.locationsSubs = this.locationsService
          .save(this.locationsReq)
          ?.subscribe((result) => {
            this.saveLocationsRes = result
            if (this.saveLocationsRes) {
              this.messageService.add({
                severity: 'success',
                summary: 'Save',
                detail: '' + this.saveLocationsRes.message,
              })
              setTimeout(
                () => this.route.navigateByUrl('admin/locations'),
                2000,
              )
            }
          })
      }
    }
   
  }

  back() {
    this.route.navigateByUrl('admin/locations')
  }
}
