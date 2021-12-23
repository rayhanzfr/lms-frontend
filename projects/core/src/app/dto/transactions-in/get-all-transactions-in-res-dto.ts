import { GetTransactionsInDataDto } from "./get-transactions-in-data-dto"

export class GetAllTransactionsInResDto {
	GetTransactionsInDataDto!: GetTransactionsInDataDto[]
	message!: string
}
