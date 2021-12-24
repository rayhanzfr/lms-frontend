import { ItemsBrands } from "../items-brands/items-brands";

export class Items{
    id!:string;
    files!:string;
	itemsTypes?:string;
	itemsBrands!:ItemsBrands;
	itemsCode!:string;
	itemsName!:string;
    version!: number;
	createdAt!: string;
	createdBy!: string;
	updatedAt!: string;
	updatedBy!: string;
}