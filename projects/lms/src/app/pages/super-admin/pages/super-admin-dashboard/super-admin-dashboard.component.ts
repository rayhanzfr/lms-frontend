import { Component, OnInit } from '@angular/core';
import { Assets } from 'projects/core/src/app/dto/asset/assets';
import { GetAllAssetsResDto } from 'projects/core/src/app/dto/asset/get-all-assets-res-dto';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { ItemsService } from 'projects/core/src/app/services/items/items.service';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent implements OnInit {

  constructor(private assetsService: AssetsService, private itemsService: ItemsService, private employeesService: EmployeesService) { }
  totalBorrowed!:number
  totalAsset!:number
  totalItem!:number
  totalEmployee!:number
  data:GetAllAssetsResDto= new GetAllAssetsResDto()

  ngOnInit(): void {
    this.assetsService.getAll().subscribe(result=>{this.totalAsset=result.data.length})
    this.itemsService.getAll().subscribe(result=>{this.totalItem=result.length})
    this.assetsService.getByStatusInOut('COUT').subscribe(result=>{this.totalBorrowed=result.data.length})
    this.employeesService.getAll().subscribe(result=>this.totalEmployee=result.length)
    this.assetsService.getBorrowedAssets().subscribe(result=>{this.data=result})
  }

}
