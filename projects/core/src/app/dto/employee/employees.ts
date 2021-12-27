import { Companies } from "../companies/companies";
import { Users } from "../users/users";

export class Employees{
    id!:string;
    version!:number;
    createdBy!: string;
    createdAt!: string
    updatedAt!: string
    updatedBy!: string
    isActive!:boolean
    users!:Users
    Companies!:Companies
	employeesCode!:string
	employeesFullname!:string
	employeesAddress!:string
	employeesPhoneNumber!:string
}