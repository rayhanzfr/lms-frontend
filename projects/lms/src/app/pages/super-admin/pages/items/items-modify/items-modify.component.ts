import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ItemsBrands } from 'projects/core/src/app/dto/items-brands/items-brands';
import { ItemsTypes } from 'projects/core/src/app/dto/items-types/items-types';
import { Items } from 'projects/core/src/app/dto/items/items';
import { SaveItemsResDto } from 'projects/core/src/app/dto/items/save-items-res-dto';
import { UpdateItemsResDto } from 'projects/core/src/app/dto/items/update-items-res-dto';
import { ItemsBrandsService } from 'projects/core/src/app/services/items-brands/items-brands.service';
import { ItemsTypesService } from 'projects/core/src/app/services/items-types/items-types.service';
import { ItemsService } from 'projects/core/src/app/services/items/items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-modify',
  templateUrl: './items-modify.component.html',
  styleUrls: ['./items-modify.component.css'],
  providers:[MessageService]
})
export class ItemsModifyComponent implements OnInit, OnDestroy {

  items:Items = new Items();
  listItemsBrands:ItemsBrands[]=[]
  listItemsTypes:ItemsTypes[]=[]
  itemsReq:Items = new Items();
  itemsTypes:ItemsTypes=new ItemsTypes();
  itemsBrands:ItemsBrands=new ItemsBrands();
  itemsTypesReq:ItemsTypes=new ItemsTypes();
  itemsBrandsReq:ItemsBrands=new ItemsBrands();
  itemsBrandsId!:string
  itemsTypesId!:string
  saveItemsRes:SaveItemsResDto = new SaveItemsResDto();
  updateItemsRes:UpdateItemsResDto = new UpdateItemsResDto();
  itemsSubs?:Subscription;
  itemsSub?:Subscription;
  itemsBrandsSubs?:Subscription;
  itemsTypesSubs?:Subscription;
  itemsCode!:string
  file!: File | null
  selectedFiles!: FileList

  isItemsBrands:boolean = true
  isItemsTypes:boolean = true
  isFiles:boolean = true

  constructor(private route: Router, private router:ActivatedRoute, 
    private itemsService:ItemsService, private itemsBrandsService:ItemsBrandsService,
    private itemsTypesService:ItemsTypesService, private messageService: MessageService) { }
  ngOnDestroy(): void {
    this.itemsSubs?.unsubscribe()
    this.itemsSub?.unsubscribe()
  }

  ngOnInit(): void {
    const code:any = this.router.snapshot.paramMap.get('code');
    if (code) {
      this.itemsSub = this.itemsService.getByCode(code).subscribe(result=>{
        this.items = result
        this.itemsReq = this.items
        this.itemsTypes = this.itemsReq.itemsTypes
        this.itemsBrands = this.itemsReq.itemsBrands
        this.isItemsBrands = false
        this.isItemsTypes = false
      });
    }
    this.itemsBrandsSubs = this.itemsBrandsService.getAll().subscribe(result=>{
      this.listItemsBrands=result
    })
    this.itemsTypesSubs = this.itemsTypesService.getAll().subscribe(result=>{this.listItemsTypes=result})
  }

  submitData(){

    if(this.itemsBrands == null||this.itemsTypes==null){
      this.messageService.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'Please input all form',
      })
    }else{
      this.itemsReq.itemsTypes=this.itemsTypes
      this.itemsReq.itemsBrands=this.itemsBrands
      if (this.itemsReq.itemsCode) {
        this.itemsSubs = this.itemsService.update(this.itemsReq,this.file)?.subscribe(result=>{
          this.updateItemsRes=result
          if (this.updateItemsRes) { 
            this.messageService.add({
              severity: 'success',
              summary: 'Updated',
              detail: '' + this.updateItemsRes.msg,
            })
            setTimeout(
              () => 
              this.route.navigateByUrl("admin/items"),
              2000,
            )
          }
        })  
      }else{
        this.itemsSubs=this.itemsService.save(this.itemsReq, this.file)?.subscribe(result=>{
          this.saveItemsRes=result
          if (this.saveItemsRes) {
            this.messageService.add({
              severity: 'success',
              summary: 'Save',
              detail: '' + this.saveItemsRes.msg,
            })
            setTimeout(
              () => 
              this.route.navigateByUrl("admin/items"),
              2000,
            )
          }
        })
      }
    }
    
  }
  
  back(){
    this.route.navigateByUrl("admin/items")
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
    this.file = this.selectedFiles?.item(0)
    
  }
}