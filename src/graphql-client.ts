import axios from 'axios'
axios.defaults.validateStatus = (status) => status < 500
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
interface GraphQLOptions {
	axios?: any
}
export class GraphQLClient {
	private graphQLUrl: string
	private axiosOptions: any

	constructor(graphQLUrl: string, options?: GraphQLOptions) {
		if (!graphQLUrl.startsWith('http')) graphQLUrl = 'https://' + graphQLUrl
		this.graphQLUrl = graphQLUrl
		this.axiosOptions = options?.axios
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

	async setAxiosOptions(options) {
		this.axiosOptions = options
	}

	private async request(query: string) {
		const response = await axios.post(this.graphQLUrl, {
			query,
		}, this.axiosOptions)

		if (response.data?.errors) {
			throw new GraphQLError(response.data.errors)
		}

		return response.data?.data
	}
}
