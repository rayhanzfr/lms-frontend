import { Permissions } from "../permissions/permissions";
import { Roles } from "../roles/roles";

export class PermissionsRoles{
    id!:string;
    roles!:Roles;
    permissions!:Permissions;
    version!: number;
	createdAt!: string;
	createdBy!: string;
	updatedAt!: string;
	updatedBy!: string;
}