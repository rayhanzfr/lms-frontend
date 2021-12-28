import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Companies } from 'projects/core/src/app/dto/companies/companies';
import { Locations } from 'projects/core/src/app/dto/locations/locations';
import { SaveLocationsResDto } from 'projects/core/src/app/dto/locations/save-locations-res-dto';
import { UpdateLocationsResDto } from 'projects/core/src/app/dto/locations/update-locations-res-dto';
import { CompaniesService } from 'projects/core/src/app/services/companies/companies.service';
import { LocationsService } from 'projects/core/src/app/services/locations/locations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-locations-modify',
  templateUrl: './locations-modify.component.html',
  styleUrls: ['./locations-modify.component.css']
})
export class LocationsModifyComponent implements OnInit, OnDestroy {

  locations?:Locations
  companies?: Companies[] = []
  locationsReq:Locations = new Locations();
  saveLocationsRes:SaveLocationsResDto = new SaveLocationsResDto();
  updateLocationsRes:UpdateLocationsResDto = new UpdateLocationsResDto();
  locationsSubs?:Subscription;
  locationsSub?:Subscription;
  companiesSub?: Subscription;

  constructor(private route: Router, private router:ActivatedRoute, private locationsService:LocationsService, private companiesService:CompaniesService) { }
  ngOnDestroy(): void {
    this.locationsSubs?.unsubscribe()
    this.locationsSub?.unsubscribe()
  }

  ngOnInit(): void {
    const code:any = this.router.snapshot.paramMap.get('code');
    if (code) {
      this.locations = new Locations();
      this.locationsSub = this.locationsService.getById(code).subscribe(result=>{this.locations = result
      this.locationsReq = this.locations
      });
    }

    this.companiesSub = this.companiesService.getAll().subscribe(result=>{this.companies = result})
  }

  submitData(){
    if (this.locationsReq.locationsCode) {
      this.locationsSubs = this.locationsService.update(this.locationsReq)?.subscribe(result=>{
        this.updateLocationsRes=result
        if (this.updateLocationsRes) { 
          this.route.navigateByUrl("admin/locations")
        }
      })  
    }else{
      this.locationsSubs=this.locationsService.save(this.locationsReq)?.subscribe(result=>{
        this.saveLocationsRes=result
        if (this.saveLocationsRes) {
          this.route.navigateByUrl("admin/locations")
        }
      })
    }
  }

  back(){
    this.route.navigateByUrl("admin/locations");
  }

}
