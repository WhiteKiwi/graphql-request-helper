export function paramsToGraphQL(params): string {
	const paramString = []
	for (const key of Object.keys(params)) {
		let value = params[key]
		if (Array.isArray(params[key])) {
			value=`[${params[key]}]`
		} else if (typeof (params[key])=== 'string') {
			value=`"${params[key]}"`
		}
		paramString.push(`${key}: ${value}`)
	}

	if (paramString.length > 0) return `(${paramString.join(', ')})`
	return ''
}
