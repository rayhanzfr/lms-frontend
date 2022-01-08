import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { DeleteLocationsResDto } from 'projects/core/src/app/dto/locations/delete-locations-res-dto';
import { Locations } from 'projects/core/src/app/dto/locations/locations';
import { LocationsService } from 'projects/core/src/app/services/locations/locations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-locations-view',
  templateUrl: './locations-view.component.html',
  styleUrls: ['./locations-view.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class LocationsViewComponent implements OnInit, OnDestroy {

  obs?: Subscription
  data: Locations[] = []
  resDeleteLocations?:DeleteLocationsResDto
  totalData!:number
  loading!:boolean
  isHide=true

  constructor(private router:Router, private locationsService: LocationsService,private confirmationService: ConfirmationService,
    private messageService: MessageService) { }
  ngOnDestroy(): void {
    this.obs?.unsubscribe
  }

  ngOnInit(): void {
    this.loading=true
    this.locationsService.getAll().subscribe(result => {
      this.data = result
      this.totalData = this.data.length
      this.loading = false
      this.isHide = false
    })
  }

  gotoInsert(){
    this.router.navigateByUrl('admin/locations/new')
  }

  gotoUpdate(code:string):void{
    this.router.navigateByUrl(`admin/locations/${code}`)
  }

  delete(id:string){
    if(confirm("Are you sure?")){
      this.locationsService.delete(id).subscribe(result=>{
        this.resDeleteLocations=result
        window.location.reload()
      })
    }
  }

  confirm(id: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this companies?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.locationsService.delete(id).subscribe((result) => {
          this.resDeleteLocations = result
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
