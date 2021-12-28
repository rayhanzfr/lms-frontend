import { Component, OnDestroy, OnInit } from '@angular/core';
import { Companies } from 'projects/core/src/app/dto/companies/companies';
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

  constructor(private companiesService: CompaniesService) { }
  ngOnDestroy(): void {
    this.obs?.unsubscribe
  }

  ngOnInit(): void {
    this.companiesService.getAll().subscribe(result => this.data = result)
  }

}
