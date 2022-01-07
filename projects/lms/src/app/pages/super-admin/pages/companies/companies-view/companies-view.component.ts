import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Companies } from 'projects/core/src/app/dto/companies/companies';
import { DeleteCompaniesResDto } from 'projects/core/src/app/dto/companies/delete-companies-res-dto';
import { CompaniesService } from 'projects/core/src/app/services/companies/companies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-companies-view',
  templateUrl: './companies-view.component.html',
  styleUrls: ['./companies-view.component.css']
})
export class CompaniesViewComponent implements OnInit, OnDestroy {

  obs?: Subscription
  data: Companies[] = []
  resDeleteCompanies?:DeleteCompaniesResDto
  totalData!:number
  showImg:boolean = true

  constructor(private router:Router, private companiesService: CompaniesService) { }
  ngOnDestroy(): void {
    this.obs?.unsubscribe
  }

  ngOnInit(): void {
    this.companiesService.getAll().subscribe(result =>{
      this.data = result
      for(let i = 0; i < this.data.length;i++){
        if(this.data[i].files!=null){
          this.showImg = false
        }
      }
    })
  }

  gotoInsert(){
    this.router.navigateByUrl('admin/companies/new')
  }

  gotoUpdate(code:string):void{
    this.router.navigateByUrl(`admin/companies/${code}`)
  }

  delete(id:string){
    if(confirm("Are you sure?")){
      this.companiesService.delete(id).subscribe(result=>{
        this.resDeleteCompanies=result
        window.location.reload()
      })
    }
  }
}
