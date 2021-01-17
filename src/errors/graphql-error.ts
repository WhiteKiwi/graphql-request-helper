interface Location {
	line: number
	column: number
}
interface GraphQLErrorResponse {
	message: String
	locations: Location[]
}
export class GraphQLError extends Error {
	public errors: GraphQLErrorResponse[]

	constructor(graphQLErrors: GraphQLErrorResponse[]){
		super(graphQLErrors.map((error) => error.message).join('\n'))
		this.errors = graphQLErrors

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, GraphQLError)
		}
	}
}
