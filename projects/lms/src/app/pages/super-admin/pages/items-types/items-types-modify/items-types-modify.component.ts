import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ItemsTypes } from 'projects/core/src/app/dto/items-types/items-types';
import { SaveItemsTypesResDto } from 'projects/core/src/app/dto/items-types/save-items-types-res-dto';
import { UpdateItemsTypesResDto } from 'projects/core/src/app/dto/items-types/update-items-types-res-dto';
import { ItemsTypesService } from 'projects/core/src/app/services/items-types/items-types.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-types-modify',
  templateUrl: './items-types-modify.component.html',
  styleUrls: ['./items-types-modify.component.css'],
  providers: [MessageService]
})
export class ItemsTypesModifyComponent implements OnInit {

  itemsTypes?:ItemsTypes
  itemsTypesReq:ItemsTypes = new ItemsTypes();
  saveItemsTypesRes:SaveItemsTypesResDto=new SaveItemsTypesResDto();
  updateItemsTypesRes:UpdateItemsTypesResDto=new UpdateItemsTypesResDto();
  itemsTypesSubs?:Subscription;
  itemsTypesSub?:Subscription;
  constructor(private router:ActivatedRoute, private itemsTypesService:ItemsTypesService,
    private route:Router, private messageService:MessageService) { }
  
  submitData(){
    if (this.itemsTypesReq.id) {
      this.itemsTypesSubs=this.itemsTypesService.update(this.itemsTypesReq)?.subscribe(result=>{
        this.updateItemsTypesRes=result
        if (this.updateItemsTypesRes) { 
          this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            detail: '' + this.updateItemsTypesRes.message,
          })
          setTimeout(
            () => 
            this.route.navigateByUrl("admin/items-types"),
            2000,
          )
        }
      })  
    }else{
      this.itemsTypesSubs=this.itemsTypesService.save(this.itemsTypesReq)?.subscribe(result=>{
        this.saveItemsTypesRes=result
        if (this.saveItemsTypesRes) {
          this.messageService.add({
            severity: 'success',
            summary: 'Save',
            detail: '' + this.saveItemsTypesRes.message,
          })
          setTimeout(
            () => 
            this.route.navigateByUrl("admin/items-types"),
            2000,
          )
        }
      })
    }
  }

  back(){
    this.route.navigateByUrl("admin/items-types");
  }
  ngOnDestroy(): void {
    this.itemsTypesSubs?.unsubscribe()
    this.itemsTypesSub?.unsubscribe()
  }
  ngOnInit(): void {
    const id:any = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.itemsTypes=  new ItemsTypes();
      this.itemsTypesSub=this.itemsTypesService.getByCode(id).subscribe(result=>{this.itemsTypes=result
      this.itemsTypesReq = this.itemsTypes
      });
    }
  }

}
