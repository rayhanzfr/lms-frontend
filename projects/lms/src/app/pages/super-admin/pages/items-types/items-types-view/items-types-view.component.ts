import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteItemsTypesResDto } from 'projects/core/src/app/dto/items-types/delete-items-types-res-dto';
import { ItemsTypes } from 'projects/core/src/app/dto/items-types/items-types';
import { ItemsTypesService } from 'projects/core/src/app/services/items-types/items-types.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-types-view',
  templateUrl: './items-types-view.component.html',
  styleUrls: ['./items-types-view.component.css']
})
export class ItemsTypesViewComponent implements OnInit {

  constructor(private itemsTypesService:ItemsTypesService,private router:Router) { }
  data:ItemsTypes[] = []
  totalData!:number
  obs?:Subscription
  resDeleteItemsTypes?:DeleteItemsTypesResDto
  
  gotoInsert(){
    this.router.navigateByUrl('admin/items-types/new')
  }
  gotoUpdate(i:string):void{
    this.router.navigateByUrl(`admin/items-types/${i}`)
  }
  delete(id:string){
    if(confirm("Are you sure?")){
      this.itemsTypesService.delete(id).subscribe(result=>{
        this.resDeleteItemsTypes=result
        window.location.reload()
      })
    }
  }
  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
  ngOnInit(): void {
    this.obs=this.itemsTypesService.getAll()?.subscribe(result=>{this.data=result
    console.log(this.data)
    this.totalData=this.data.length;});
  }

}
