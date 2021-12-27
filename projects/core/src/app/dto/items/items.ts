import { Files } from "../files/files";
import { ItemsBrands } from "../items-brands/items-brands";
import { ItemsTypes } from "../items-types/items-types";

export class Items{
    id!:string;
    files!:Files;
	itemsTypes?:ItemsTypes;
	itemsBrands!:ItemsBrands;
	itemsCode!:string;
	itemsName!:string;
    version!: number;
	createdAt!: string;
	createdBy!: string;
	updatedAt!: string;
	updatedBy!: string;
}