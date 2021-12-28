import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteItemsResDto } from 'projects/core/src/app/dto/items/delete-items-res-dto';
import { Items } from 'projects/core/src/app/dto/items/items';
import { ItemsService } from 'projects/core/src/app/services/items/items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-view',
  templateUrl: './items-view.component.html',
  styleUrls: ['./items-view.component.css']
})
export class ItemsViewComponent implements OnInit {

  constructor(private itemsService:ItemsService,private router:Router) { }
  data:Items[] = []
  totalData!:number
  obs?:Subscription
  resDeleteItems?:DeleteItemsResDto
  
  gotoInsert(){
    this.router.navigateByUrl('admin/items/new')
  }
  gotoUpdate(i:string):void{
    this.router.navigateByUrl(`admin/items/${i}`)
  }
  delete(id:string){
    if(confirm("Are you sure?")){
      this.itemsService.delete(id).subscribe(result=>{
        this.resDeleteItems=result
        window.location.reload()
      })
    }
  }
  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
  ngOnInit(): void {
    this.obs=this.itemsService.getAll()?.subscribe(result=>{this.data=result
    console.log(this.data)
    this.totalData=this.data.length});
  }

}
