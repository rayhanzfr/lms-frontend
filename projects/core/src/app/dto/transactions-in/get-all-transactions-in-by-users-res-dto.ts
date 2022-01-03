import { GetTransactionsInDataDto } from "./get-transactions-in-data-dto"

export class GetAllTransactionsInByUsersResDto {
	getTransactionsInDataDto!: GetTransactionsInDataDto[]
	message!: string
}