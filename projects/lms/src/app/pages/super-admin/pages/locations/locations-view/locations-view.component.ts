import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(private locationsService: LocationsService) { }
  ngOnDestroy(): void {
    this.obs?.unsubscribe
  }

  ngOnInit(): void {
    this.locationsService.getAll().subscribe(result => this.data = result)
  }

}
