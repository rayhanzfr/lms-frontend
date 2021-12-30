import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetAllStatusesAssetsResDto } from 'projects/core/src/app/dto/statuses-assets/get-all-statuses-assets-res-dto';
import { StatusesAssets } from 'projects/core/src/app/dto/statuses-assets/statuses-assets';
import { StatusesInOut } from 'projects/core/src/app/dto/statuses-in-out/statuses-in-out';
import { StatusesAssetsService } from 'projects/core/src/app/services/statuses-assets/statuses-assets.service';
import { StatusesInOutService } from 'projects/core/src/app/services/statuses-in-out/statuses-in-out.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-statuses-assets-view',
  templateUrl: './statuses-assets-view.component.html',
  styleUrls: ['./statuses-assets-view.component.css']
})
export class StatusesAssetsViewComponent implements OnInit, OnDestroy {

  obs1?: Subscription
  obs2?: Subscription
  data: StatusesAssets[] = []
  dataInOut:StatusesInOut[] = []
  
  constructor(private statusesAssetsService: StatusesAssetsService, private statusesInOutService:StatusesInOutService) { }
  ngOnDestroy(): void {
    this.obs1?.unsubscribe;
    this.obs2?.unsubscribe
  }

  ngOnInit(): void {
    this.obs1=this.statusesAssetsService.getAll().subscribe(result => this.data = result)
    this.obs2=this.statusesInOutService.getAll().subscribe(result => this.dataInOut = result)
  }

}
