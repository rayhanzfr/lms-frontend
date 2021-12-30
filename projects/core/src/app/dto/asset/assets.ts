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
	invoicesCode!:string
	assetsName!:string
	statusesAssetsId!:string
	statusesAssetsName!:string
	statusesInOutId!:string
	statusesInOutName!:string
	assetsExpired!:string
	files!:Files
}