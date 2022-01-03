import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Companies } from 'projects/core/src/app/dto/companies/companies';
import { SaveCompaniesResDto } from 'projects/core/src/app/dto/companies/save-companies-res-dto';
import { UpdateCompaniesResDto } from 'projects/core/src/app/dto/companies/update-companies-res-dto';
import { CompaniesService } from 'projects/core/src/app/services/companies/companies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-companies-modify',
  templateUrl: './companies-modify.component.html',
  styleUrls: ['./companies-modify.component.css']
})
export class CompaniesModifyComponent implements OnInit, OnDestroy {

  companies?:Companies
  companiesReq:Companies = new Companies();
  saveCompaniesRes:SaveCompaniesResDto = new SaveCompaniesResDto();
  updateCompaniesRes:UpdateCompaniesResDto = new UpdateCompaniesResDto();
  companiesSubs?:Subscription;
  companiesSub?:Subscription;
  companiesCode!:string
  file!: File | null
  selectedFiles!: FileList


  isUpdate:boolean = false
  constructor(private route: Router, private router:ActivatedRoute, private companiesService:CompaniesService) { }
  ngOnDestroy(): void {
    this.companiesSubs?.unsubscribe()
    this.companiesSub?.unsubscribe()
  }

  ngOnInit(): void {
    const code:any = this.router.snapshot.paramMap.get('code');
    if (code) {
      this.isUpdate = true
      this.companies = new Companies();
      this.companiesSub = this.companiesService.getByCode(code).subscribe(result=>{this.companies = result
      this.companiesReq = this.companies
      this.companiesCode = code
      });
    }
  }

  submitData(){
    if (this.companiesReq.companiesCode) {
      this.file = this.selectedFiles.item(0)
      this.companiesSubs = this.companiesService.update(this.companiesReq, this.file)?.subscribe(result=>{
        this.updateCompaniesRes=result
        if (this.updateCompaniesRes) { 
          this.route.navigateByUrl("admin/companies")
        }
      })  
    }else{
      this.file = this.selectedFiles?.item(0)
      this.companiesSubs=this.companiesService.save(this.companiesReq, this.file)?.subscribe(result=>{
        this.saveCompaniesRes=result
        if (this.saveCompaniesRes) {
          this.route.navigateByUrl("admin/companies")
        }
      })
    }
  }
  
  back(){
    this.route.navigateByUrl("admin/companies")
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

}
