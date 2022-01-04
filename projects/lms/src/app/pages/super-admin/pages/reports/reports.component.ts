import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetsService } from '../../../../../../../core/src/app/services/assets/assets.service';
import { saveAs } from 'file-saver';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, OnDestroy {

  obs?: Subscription
  constructor(private router:Router, private assetsService: AssetsService) { }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
  }

  downloadAssets(){
    this.obs = this.assetsService.download().subscribe(blob => saveAs(blob, 'assets-report.pdf'));
  }

  sendReport(){
  this.obs = this.assetsService.sendReport().subscribe()
  }

}
