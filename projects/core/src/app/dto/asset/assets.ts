import { Files } from "../files/files";

export class Assets{
    id!:string;
    version!:number;
    createdBy!: string;
    createdAt!: string
    updatedAt!: string
    updatedBy!: string
    isActive!:boolean
	itemsName!:string
	itemsCode!:string
	companiesCode!:string
	companiesName!:string
	invoicesCode!:string
	assetsName!:string
	statusesAssetsName!:string
	statusesAssetsCode!:string
	statusesInOutName!:string
	statusesInOutCode!:string
	assetsExpired!:string
	files!:Files
}