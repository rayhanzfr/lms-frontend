import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetAllStatusesAssetsResDto } from 'projects/core/src/app/dto/statuses-assets/get-all-statuses-assets-res-dto';
import { StatusesAssetsService } from 'projects/core/src/app/services/statuses-assets/statuses-assets.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-statuses-assets-view',
  templateUrl: './statuses-assets-view.component.html',
  styleUrls: ['./statuses-assets-view.component.css']
})
export class StatusesAssetsViewComponent implements OnInit, OnDestroy {

  obs?: Subscription
  data?: GetAllStatusesAssetsResDto

  constructor(private statusesAssetsService: StatusesAssetsService) { }
  ngOnDestroy(): void {
    // this.obs?.unsubscribe;
  }

  ngOnInit(): void {
    this.data = new GetAllStatusesAssetsResDto
    // this.statusesAssetsService.getAll().subscribe(result => this.data = result)
  }

}
