import { SaveTransactionsDetailsInReqDto } from "./save-transactions-details-in-req-dto"

export class GetTransactionsInDataDto {
	id!: string
	transactionsInCode!: string
	transactionsInDate!: string
	transactionsOutId!: string
	transactionsDetailIn!: SaveTransactionsDetailsInReqDto[]
	version!: number
	createdAt!: string
	createdBy!: string
	updatedAt!: string
	updatedBy!: string
	isActive!: boolean

}
