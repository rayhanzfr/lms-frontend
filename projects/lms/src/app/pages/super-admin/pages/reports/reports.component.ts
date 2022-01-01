import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetsService } from '../../../../../../../core/src/app/services/assets/assets.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, OnDestroy {

  constructor(private router:Router, private assetsService: AssetsService) { }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
  }

  downloadAssets(){
    this.assetsService.download().subscribe(blob => saveAs(blob, 'assets-report.pdf'));
  }

  sendReport(){
    this.assetsService.sendReport().subscribe()
  }

}
