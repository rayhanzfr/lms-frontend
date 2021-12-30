import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assets } from 'projects/core/src/app/dto/asset/assets';
import { Employees } from 'projects/core/src/app/dto/employee/employees';
import { Items } from 'projects/core/src/app/dto/items/items';
import { Locations } from 'projects/core/src/app/dto/locations/locations';
import { SaveFullTransactionsOutReqDto } from 'projects/core/src/app/dto/transactions-out/save-full-transactions-out-req-dto';
import { SaveTransactionsDetailsOutReqDto } from 'projects/core/src/app/dto/transactions-out/save-transactions-details-out-req-dto';
import { SaveTransactionsOutReqDto } from 'projects/core/src/app/dto/transactions-out/save-transactions-out-req-dto';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { ItemsService } from 'projects/core/src/app/services/items/items.service';
import { LocationsService } from 'projects/core/src/app/services/locations/locations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transactions-out-modify',
  templateUrl: './transactions-out-modify.component.html',
  styleUrls: ['./transactions-out-modify.component.css']
})
export class TransactionsOutModifyComponent implements OnInit, OnDestroy {

  // items:Items = new Items();
  // listItemsBrands:ItemsBrands[]=[]
  // listItemsTypes:ItemsTypes[]=[]
  // itemsReq:Items = new Items();
  // itemsTypes:ItemsTypes=new ItemsTypes();
  // itemsBrands:ItemsBrands=new ItemsBrands();
  // itemsTypesReq:ItemsTypes=new ItemsTypes();
  // itemsBrandsReq:ItemsBrands=new ItemsBrands();
  // itemsBrandsId!:string
  // itemsTypesId!:string
  // saveItemsRes:SaveItemsResDto = new SaveItemsResDto();
  // updateItemsRes:UpdateItemsResDto = new UpdateItemsResDto();
  // itemsSubs?:Subscription;
  // itemsSub?:Subscription;
  // itemsBrandsSubs?:Subscription;
  // itemsTypesSubs?:Subscription;
  // itemsCode!:string
  // file!: File | null
  assetsFor: any[] = [
    {
      "name": "Employees"
    },
    {
      "name": "Locations"
    },
    {
      "name": "General"
    },
  ];

  assetsForSelected?:string;
  isEmployees:boolean=false;
  isLocations:boolean=false;

  selectedFiles!: FileList
  listItems:Items[] = [];
  itemsSubs?:Subscription;
  listLocations:Locations[]=[];
  locationsSubs?:Subscription;
  listEmployees:Employees[]=[];
  employeesSubs?:Subscription;
  listAssets:Assets[]=[];
  assetsSubs?:Subscription;
  qty?:number;
  saveFullTransactionsOutReqDto:SaveFullTransactionsOutReqDto=new SaveFullTransactionsOutReqDto();
  saveTransactionsOutHeaderReqDto:SaveTransactionsOutReqDto=new SaveTransactionsOutReqDto();
  saveTransactionsOutDetailReqDto:SaveTransactionsDetailsOutReqDto=new SaveTransactionsDetailsOutReqDto();
  listSaveTransactionsOutDetailReqDto:SaveTransactionsDetailsOutReqDto[]=[]


  constructor(private route: Router, private router:ActivatedRoute, 
    private assetsService:AssetsService, private locationsService:LocationsService,
    private employeesService:EmployeesService, private itemsService:ItemsService) { }
  
    ngOnDestroy(): void {
    this.itemsSubs?.unsubscribe()
    this.locationsSubs?.unsubscribe()
    this.employeesSubs?.unsubscribe()
  }

  ngOnInit(): void {
    this.itemsSubs = this.itemsService.getAll().subscribe(result=>{this.listItems = result});
    this.locationsSubs = this.locationsService.getAll().subscribe(result=>{this.listLocations = result});
    this.employeesSubs = this.employeesService.getAll().subscribe(result=>{this.listEmployees = result});
    
    
    
  }
  vContent(){
    if (this.assetsForSelected=="Employees") {
      this.isEmployees=true;
    } else if (this.assetsForSelected=="Locations"){
      this.isLocations=true;
    }
  }
  
  submitData(){
    
  }
  
  back(){
    this.route.navigateByUrl("admin/transactions-out")
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

}

