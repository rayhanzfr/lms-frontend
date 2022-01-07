import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { statusesAssetsCode } from 'projects/core/src/app/constant/statuses-assets-code';
import { statusesInOutCode} from 'projects/core/src/app/constant/statuses-in-out-code';
import { Assets } from 'projects/core/src/app/dto/asset/assets';
import { Employees } from 'projects/core/src/app/dto/employee/employees';
import { ItemsBrands } from 'projects/core/src/app/dto/items-brands/items-brands';
import { ItemsTypes } from 'projects/core/src/app/dto/items-types/items-types';
import { Items } from 'projects/core/src/app/dto/items/items';
import { Locations } from 'projects/core/src/app/dto/locations/locations';
import { SaveFullTransactionsOutReqDto } from 'projects/core/src/app/dto/transactions-out/save-full-transactions-out-req-dto';
import { SaveFullTransactionsOutResDto } from 'projects/core/src/app/dto/transactions-out/save-full-transactions-out-res-dto';
import { SaveTransactionsDetailsOutReqDto } from 'projects/core/src/app/dto/transactions-out/save-transactions-details-out-req-dto';
import { SaveTransactionsOutReqDto } from 'projects/core/src/app/dto/transactions-out/save-transactions-out-req-dto';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { ItemsBrandsService } from 'projects/core/src/app/services/items-brands/items-brands.service';
import { ItemsTypesService } from 'projects/core/src/app/services/items-types/items-types.service';
import { ItemsService } from 'projects/core/src/app/services/items/items.service';
import { LocationsService } from 'projects/core/src/app/services/locations/locations.service';
import { TransactionsOutService } from 'projects/core/src/app/services/transactions-out/transactions-out.service';
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
  constructor(private route: Router, private router:ActivatedRoute, 
    private assetsService:AssetsService, private locationsService:LocationsService,
    private employeesService:EmployeesService, private itemsService:ItemsService,
    private itemsTypesService:ItemsTypesService,private itemsBrandsService:ItemsBrandsService,
    private transactionsOutService:TransactionsOutService) { }

  assetsFor: AssetsFor[]=[]
  assetsForEmp:AssetsFor= new AssetsFor();
  assetsForLoc:AssetsFor= new AssetsFor();
  assetsForGen:AssetsFor= new AssetsFor();

  assetsForSelected!:AssetsFor;

  isEmployees:boolean=false;
  isLocations:boolean=false;
  isGeneral:boolean=false;

  selectedFiles!: FileList
  listItemsTypes:ItemsTypes[]=[]
  selectedItemsTypes:ItemsTypes=new ItemsTypes();
  itemsTypesSubs?:Subscription;
  listItemsBrands:ItemsBrands[]=[]
  selectedItemsBrands:ItemsBrands=new ItemsBrands();
  itemsBrandsSubs?:Subscription;
  items:Items = new Items();
  itemsAll:Items[]=[]
  itemsSubs?:Subscription;
  itemsAllSubs?:Subscription;
  listLocations:Locations[]=[];
  locations!:Locations
  listLocationsCode:string[]=[]
  locationsSubs?:Subscription;
  listEmployees:Employees[]=[];
  employees!:Employees
  usersEmployee:Employees = new Employees();
  listEmployeesCode:string[]=[]
  employeesSubs?:Subscription;
  listAssetsGeneral:Assets[]=[]
  assetsGeneral!:Assets
  listAssetsGeneralName:string[]=[]
  assetsGeneralSubs?:Subscription;

  listAssets:Assets[]=[];
  assetsSubs?:Subscription;
  qty!:number;
  expiredDate!:string;
  saveFullTransactionsOutReqDto:SaveFullTransactionsOutReqDto=new SaveFullTransactionsOutReqDto();
  saveFullTransactionsOutResDto:SaveFullTransactionsOutResDto=new SaveFullTransactionsOutResDto();
  saveTransactionsOutHeaderReqDto:SaveTransactionsOutReqDto=new SaveTransactionsOutReqDto();
  saveTransactionsOutDetailReqDto:SaveTransactionsDetailsOutReqDto=new SaveTransactionsDetailsOutReqDto();
  listSaveTransactionsOutDetailReqDto:SaveTransactionsDetailsOutReqDto[]=[]
  transactionsOutSubs?:Subscription


  
  
  ngOnDestroy(): void {
    this.itemsBrandsSubs?.unsubscribe()
    this.itemsTypesSubs?.unsubscribe()
    this.itemsSubs?.unsubscribe()
    this.locationsSubs?.unsubscribe()
    this.employeesSubs?.unsubscribe()
    this.assetsSubs?.unsubscribe()
    this.transactionsOutSubs?.unsubscribe()

  }

  ngOnInit(): void {
    this.assetsForEmp.name="Employees"
    this.assetsForLoc.name="Locations"
    this.assetsForGen.name="General"
    this.assetsFor.push(this.assetsForEmp);
    this.assetsFor.push(this.assetsForLoc);
    this.assetsFor.push(this.assetsForGen);
    this.itemsAllSubs=this.itemsService.getAll().subscribe(result=>this.itemsAll=result);
    this.itemsTypesSubs = this.itemsTypesService.getAll().subscribe(result=>{this.listItemsTypes = result});
    this.itemsBrandsSubs = this.itemsBrandsService.getAll().subscribe(result=>{this.listItemsBrands = result});
    this.locationsSubs = this.locationsService.getAll().subscribe(result=>{
      this.listLocations = result
      for (let i = 0; i < this.listLocations.length; i++) {
        this.locations=new Locations();
        this.locations = this.listLocations[i];
        this.listLocationsCode.push(this.locations.locationsCode)
      }
    });
    this.employeesSubs = this.employeesService.getAll().subscribe(result=>{
      this.listEmployees = result
      for (let i = 0; i < this.listEmployees.length; i++) {
        this.employees = new Employees();
        this.employees = this.listEmployees[i];
        this.listEmployeesCode.push(this.employees.employeesCode)
      }
    });
    this.assetsGeneralSubs = this.assetsService.getByItemsTypesCode("ITMTYPES1").subscribe(result=>{
      this.listAssetsGeneral = result.data
      for (let i = 0; i < this.listAssetsGeneral.length; i++) {
        this.assetsGeneral = new Assets();
        this.assetsGeneral = this.listAssetsGeneral[i];
        this.listAssetsGeneralName.push(this.assetsGeneral.assetsName)
      }
    });
    
    
    
  }
  vContent(assetsForSelected:AssetsFor){
    if (this.assetsForSelected.name=="Employees") {
      this.isEmployees=true;
      this.isLocations=false;
      this.isGeneral=false;
    } else if (this.assetsForSelected.name=="Locations"){
      this.isEmployees=false;
      this.isLocations=true;
      this.isGeneral=false;
    } else {
      this.isEmployees=false;
      this.isLocations=false;
      this.isGeneral=true;
    }
  }
  
  findAssets(){
    this.employeesService.getByUsersId().subscribe(result=>{
    this.usersEmployee=result
    this.itemsSubs = this.itemsService.getByBrandsAndTypes(this.selectedItemsBrands.itemsBrandsCode,this.selectedItemsTypes.itemsTypesCode).subscribe(result=>{
      this.items = result
      console.log(this.items)
      if (this.items) {        
        this.assetsSubs=this.assetsService.getByReq(this.items.itemsCode,this.usersEmployee.companies.companiesCode,statusesAssetsCode.get(1)!,statusesInOutCode.get(1)!,this.qty).subscribe(result=>{
          this.listAssets=result
          console.log(this.listAssets)
          for (let i = 0; i < this.listAssets.length; i++) {
            this.saveTransactionsOutDetailReqDto = new SaveTransactionsDetailsOutReqDto();
            this.saveTransactionsOutDetailReqDto.expiredDate = this.expiredDate;
            this.saveTransactionsOutDetailReqDto.assetsName = this.listAssets[i].assetsName;
            this.listSaveTransactionsOutDetailReqDto.push(this.saveTransactionsOutDetailReqDto);
          }
  
        });
      }
    });
  });
    

  }
  submitData(){
    console.log(this.listSaveTransactionsOutDetailReqDto)
    this.saveFullTransactionsOutReqDto.listSaveTransactionsDetailsOutReqDto=this.listSaveTransactionsOutDetailReqDto;
    this.saveFullTransactionsOutReqDto.saveTransactionsOutReqDto=this.saveTransactionsOutHeaderReqDto
    this.transactionsOutService.insertAll(this.saveFullTransactionsOutReqDto).subscribe(result=>{
      this.saveFullTransactionsOutResDto=result;
      this.route.navigateByUrl("admin/transactions-out")
    })
  }
  
  back(){
    this.route.navigateByUrl("admin/transactions-out")
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  delete(rowIndex:number){
    this.listSaveTransactionsOutDetailReqDto=this.listSaveTransactionsOutDetailReqDto.filter(result=>
      this.listSaveTransactionsOutDetailReqDto[rowIndex].assetsName != result.assetsName)
  }
}
 class AssetsFor{
   name!:string
 }
