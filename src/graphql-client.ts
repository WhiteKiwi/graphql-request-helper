import axios from 'axios'
import { Field } from './models'
import {
	paramsToGraphQL,
	fieldsToGraphQL,
} from './utils'

interface GraphQLClientQueryParams {
	queryName: string
	params: any
	fields: (string | Field)[]
}
export class GraphQLClient {
	private graphQLUrl: string

	constructor(graphQLUrl: string) {
		this.graphQLUrl = graphQLUrl
	}

	async query({ queryName, params = {}, fields = [] }: GraphQLClientQueryParams) {
		const query = `{
			${queryName}${paramsToGraphQL(params)} ${fieldsToGraphQL(fields)}
		}`

		const response = await this.request(query)
		return response.data.data[queryName]
	}

	private async request(query: string) {
		return await axios.post(this.graphQLUrl, {
			query,
		})
	}
}
