import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ItemsBrands } from 'projects/core/src/app/dto/items-brands/items-brands';
import { SaveItemsBrandsResDto } from 'projects/core/src/app/dto/items-brands/save-items-brands-res-dto';
import { UpdateItemsBrandsResDto } from 'projects/core/src/app/dto/items-brands/update-items-brands-res-dto';
import { ItemsBrandsService } from 'projects/core/src/app/services/items-brands/items-brands.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-brands-modify',
  templateUrl: './items-brands-modify.component.html',
  styleUrls: ['./items-brands-modify.component.css'],
  providers: [MessageService]
})
export class ItemsBrandsModifyComponent implements OnInit {

  itemsBrands?:ItemsBrands
  itemsBrandsReq:ItemsBrands = new ItemsBrands();
  saveItemsBrandsRes:SaveItemsBrandsResDto=new SaveItemsBrandsResDto();
  updateItemsBrandsRes:UpdateItemsBrandsResDto=new UpdateItemsBrandsResDto();
  itemsBrandsSubs?:Subscription;
  itemsBrandsSub?:Subscription;
  constructor(private router:ActivatedRoute, private itemsBrandsService:ItemsBrandsService,
    private route:Router, private messageService:MessageService) { }
  
  submitData(){
    if (this.itemsBrandsReq.id) {
      this.itemsBrandsSubs=this.itemsBrandsService.update(this.itemsBrandsReq)?.subscribe(result=>{
        this.updateItemsBrandsRes=result
        if (this.updateItemsBrandsRes) { 
          this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            detail: '' + this.updateItemsBrandsRes.msg,
          })
          setTimeout(
            () => 
            this.route.navigateByUrl("admin/items-brands")
            ,
            2000,
          )
        }
      })  
    }else{
      this.itemsBrandsSubs=this.itemsBrandsService.save(this.itemsBrandsReq)?.subscribe(result=>{
        this.saveItemsBrandsRes=result
        if (this.saveItemsBrandsRes) {
          this.messageService.add({
            severity: 'success',
            summary: 'success',
            detail: '' + this.saveItemsBrandsRes.msg,
          })
          setTimeout(
            () => 
            this.route.navigateByUrl("admin/items-brands")
            ,
            2000,
            )
        }
      })
    }
  }

  back(){
    this.route.navigateByUrl("admin/items-brands");
  }
  ngOnDestroy(): void {
    this.itemsBrandsSubs?.unsubscribe()
    this.itemsBrandsSub?.unsubscribe()
  }
  ngOnInit(): void {
    const id:any = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.itemsBrands=  new ItemsBrands();
      this.itemsBrandsSub=this.itemsBrandsService.getByCode(id).subscribe(result=>{this.itemsBrands=result
      this.itemsBrandsReq = this.itemsBrands
      });
    }
  }

}
