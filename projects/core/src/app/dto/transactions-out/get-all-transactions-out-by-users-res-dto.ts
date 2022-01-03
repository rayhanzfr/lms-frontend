import { GetTransactionsOutDataDto } from "./get-transactions-out-data-dto"

export class GetAllTransactionsOutByUsersResDto {
	getTransactionsOutDataDto!: GetTransactionsOutDataDto[]
	message!: string
}