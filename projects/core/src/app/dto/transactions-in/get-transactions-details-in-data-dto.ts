export class GetTransactionsDetailsInDataDto {
	id!: string
	transactionsInId!: string
	transactionsInCode!: string
	locationsId?: string
	locationsDeploy?: string
	employeesId?: string
	employeesFullname?: string
	assetsId!: string
	assetsName!: string
	statusesTransactionsId!: string
	statusesTransactionsName!: string
	returnDate!: string
	version!: number
	createdAt!: string
	createdBy!: string
	updatedAt!: string
	updatedBy!: string
	isActive!: boolean

}
