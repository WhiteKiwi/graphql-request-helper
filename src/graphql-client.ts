import axios from 'axios'
import { Field } from './models'
import {
	paramsToGraphQL,
	fieldsToGraphQL,
} from './utils'

interface GraphQLQueryParams {
	name: string
	params: any
	fields: (string | Field)[]
}
export class GraphQLClient {
	private graphQLUrl: string

	constructor(graphQLUrl: string) {
		this.graphQLUrl = graphQLUrl
	}

	async query({ name, params = {}, fields = [] }: GraphQLQueryParams) {
		const query = `query{
			${name}${paramsToGraphQL(params)} ${fieldsToGraphQL(fields)}
		}`

		const response = await this.request(query)
		return response.data.data[name]
	}

	async mutation({ name, params = {}, fields = [] }: GraphQLQueryParams) {
		const mutation = `mutation{
			${name}${paramsToGraphQL(params)} ${fieldsToGraphQL(fields)}
		}`

		const response = await this.request(mutation)
		return response.data.data[name]
	}

	private async request(query: string) {
		return await axios.post(this.graphQLUrl, {
			query,
		})
	}
}
