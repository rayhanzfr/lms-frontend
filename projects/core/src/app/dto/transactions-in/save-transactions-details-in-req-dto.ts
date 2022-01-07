import { StatusesTransactions } from "../statuses-transactions/statuses-transactions"

export class SaveTransactionsDetailsInReqDto {

	transactionsInId!: string
	locationsCode?: string
	employeesCode?: string
	assetsGeneralName?:string
	assetsName!: string
	statusesTransactionsCode!: string
	returnDate!: string

}
