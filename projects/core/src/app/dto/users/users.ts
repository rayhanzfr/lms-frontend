import { Roles } from "../roles/roles";

export class Users{
    id!:string;
    version!:number;
    createdBy!: string;
    createdAt!: string
    updatedAt!: string
    updatedBy!: string
    isActive!:boolean
    usersEmail!:string
    usersPassword!:string
    roles!: Roles
}