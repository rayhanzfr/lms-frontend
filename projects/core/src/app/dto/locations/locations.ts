import { Companies } from "../companies/companies"

export class Locations{
	
	id!: string
	version!: number
	createdAt!: string
	createdBy!: string
	updatedAt!: string
	updatedBy!: string
	isActive!: boolean
	locationsCode!: string
	locationsDeploy!: string
	companies!: Companies

}
