import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllAssetsResDto } from 'projects/core/src/app/dto/asset/get-all-assets-res-dto';
import { Employees } from 'projects/core/src/app/dto/employee/employees';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { ItemsService } from 'projects/core/src/app/services/items/items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent implements OnInit {

  constructor(private assetsService: AssetsService, private itemsService: ItemsService, private employeesService: EmployeesService, private router: Router) { }
  totalBorrowed!:number
  totalAsset!:number
  totalItem!:number
  totalEmployee!:number
  employee!: Employees
  data:GetAllAssetsResDto= new GetAllAssetsResDto()

  employeesSubs?:Subscription
  assetsSubs?:Subscription
  itemsSubs?:Subscription

  ngOnInit(): void {
    this.assetsSubs = this.assetsService.getAll().subscribe(result=>{this.totalAsset=result.data.length})
    this.itemsSubs = this.itemsService.getAll().subscribe(result=>{this.totalItem=result.length})
    this.assetsSubs =  this.assetsService.getByStatusInOut('COUT').subscribe(result=>{this.totalBorrowed=result.data.length})
    this.employeesSubs = this.employeesService.getAll().subscribe(result=>this.totalEmployee=result.length)
    this.employeesSubs = this.employeesService.getByUsersId().subscribe(result=>this.employee = result)
    this.assetsSubs = this.assetsService.getBorrowedAssets().subscribe(result=>{this.data=result})
  }

}
