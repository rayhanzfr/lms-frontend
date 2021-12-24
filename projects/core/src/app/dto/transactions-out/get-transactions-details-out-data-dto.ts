export class GetTransactionsDetailsOutDataDto {
	id!: string
	transactionsOutCode!: string
	locationsId?: string
	locationsCode?: string
	employeesId?: string
	employeesCode?: string
	assetsId!: string
	assetsName!: string
	expiredDate!: string
	version!: number
	createdAt!: string
	createdBy!: string
	updatedAt!: string
	updatedBy!: string
	isActive!: boolean

}
