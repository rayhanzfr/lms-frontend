import { SaveTransactionsDetailsInReqDto } from "./save-transactions-details-in-req-dto"
import { SaveTransactionsInReqDto } from "./save-transactions-in-req-dto"

export class SaveFullTransactionsInReqDto {

	transactionsDetailDto!: SaveTransactionsDetailsInReqDto[]
	saveTransactionsInReqDto!: SaveTransactionsInReqDto

}
