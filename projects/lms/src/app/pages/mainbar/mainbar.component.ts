import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrls: ['./mainbar.component.css']
})
export class MainbarComponent implements OnInit {

  menuItem: any[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.menuItem = [
      {
        name: 'Dashboard',
        path: '/admin-dashboard'
      },
      {
        name: 'Company'
      },
      {
        name: 'Employee',
        menu: [
          {
            name: 'Users'
          },
          {
            name: 'Roles'
          }
        ]
      },
      {
        name: 'Items',
        menu: [
          {
            name: 'Items Types'
          },
          {
            name: 'Items Brands'
          }
        ]
      },
      {
        name: 'Invoices'
      },
      {
        name: 'Assets',
        menu: [
          {
            name: 'statuses'
          }
        ]
      },
      {
        name: 'Transaction',
        menu: [
          {
            name: 'Borrowed'
          },
          {
            name: 'Returned'
          }
        ]
      },
      {
        name: 'Report'
      }
    ];
  }

}
