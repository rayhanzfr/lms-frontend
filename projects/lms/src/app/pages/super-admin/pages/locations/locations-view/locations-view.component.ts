import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteLocationsResDto } from 'projects/core/src/app/dto/locations/delete-locations-res-dto';
import { Locations } from 'projects/core/src/app/dto/locations/locations';
import { LocationsService } from 'projects/core/src/app/services/locations/locations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-locations-view',
  templateUrl: './locations-view.component.html',
  styleUrls: ['./locations-view.component.css']
})
export class LocationsViewComponent implements OnInit, OnDestroy {

  obs?: Subscription
  data: Locations[] = []
  resDeleteLocations?:DeleteLocationsResDto
  totalData!:number
  loading!:boolean
  isHide=true

  constructor(private router:Router, private locationsService: LocationsService) { }
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
}
