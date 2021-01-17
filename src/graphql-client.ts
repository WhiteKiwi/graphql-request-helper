import axios from 'axios'
import { GraphQLError } from './errors'
import { Field } from './models'
import {
	paramsToGraphQL,
	fieldsToGraphQL,
} from './utils'

interface GraphQLQueryParams {
	name: string
	params?: any
	fields?: (string | Field)[]
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

		const data = await this.request(query)
		return data[name]
	}

	async mutation({ name, params = {}, fields = [] }: GraphQLQueryParams) {
		const mutation = `mutation{
			${name}${paramsToGraphQL(params)} ${fieldsToGraphQL(fields)}
		}`

		const data = await this.request(mutation)
		return data[name]
	}

	private async request(query: string) {
		const response = await axios.post(this.graphQLUrl, {
			query,
		}, {
			validateStatus: function (status) {
				return status < 500
			},
		})

		if (response.data?.errors) {
			throw new GraphQLError(response.data.errors)
		}

		return response.data?.data
	}
}
