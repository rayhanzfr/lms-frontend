import { Component, OnInit } from '@angular/core';
import { DeleteItemsBrandsResDto } from 'projects/core/src/app/dto/items-brands/delete-items-brands-res-dto';
import { ItemsBrands } from 'projects/core/src/app/dto/items-brands/items-brands';
import { ItemsBrandsService } from 'projects/core/src/app/services/items-brands/items-brands.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-brands-view',
  templateUrl: './items-brands-view.component.html',
  styleUrls: ['./items-brands-view.component.css']
})
export class ItemsBrandsViewComponent implements OnInit {

  constructor(private itemsBrandsService:ItemsBrandsService) { }
  data:ItemsBrands[] = []
  obs?:Subscription
  resDeleteItemsBrands?:DeleteItemsBrandsResDto
  
  delete(id:string){
    if(confirm("Are you sure?")){
      this.itemsBrandsService.delete(id).subscribe(result=>{
        this.resDeleteItemsBrands=result
        window.location.reload()
      })
    }
  }
  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
  ngOnInit(): void {
    this.obs=this.itemsBrandsService.getAll()?.subscribe(result=>{this.data=result
    console.log(this.data)});
  }

}
