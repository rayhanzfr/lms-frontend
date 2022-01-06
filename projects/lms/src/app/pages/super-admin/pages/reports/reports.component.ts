import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetsService } from '../../../../../../../core/src/app/services/assets/assets.service';
import { saveAs } from 'file-saver';
import { Subscription } from 'rxjs';
import { HistoriesService } from '../../../../../../../core/src/app/services/histories/histories.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { AuthService } from 'projects/core/src/app/services/auth/auth.service';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, OnDestroy {

  obs?: Subscription
  historiesObs?:Subscription
  constructor(private router:Router,private historiesService:HistoriesService ,private assetsService: AssetsService,
    private employeesService:EmployeesService, private authService:AuthService) { }
    usersId?:string
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

  downloadHistory():void{       
      this.employeesService.getByUsersId().subscribe(result=>{
        const companiesCode = result.companies.companiesCode
        this.historiesObs = this.historiesService.generatePdf(companiesCode).subscribe(blob=>
          saveAs(blob, 'assets-histories.pdf'))
      })
    
  }
}
