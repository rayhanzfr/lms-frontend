import { Component, OnDestroy, OnInit } from '@angular/core';
import { Invoices } from 'projects/core/src/app/dto/invoices/invoices';
import { InvoicesService } from 'projects/core/src/app/services/invoices/invoices.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invoices-view',
  templateUrl: './invoices-view.component.html',
  styleUrls: ['./invoices-view.component.css']
})
export class InvoicesViewComponent implements OnInit,OnDestroy {

  obs?: Subscription
  data: Invoices[] = []

  constructor(private invoicesService: InvoicesService) { }
  ngOnDestroy(): void {
    this.obs?.unsubscribe
  }

  ngOnInit(): void {
    this.invoicesService.getAll().subscribe(result => this.data = result)
  }

}
