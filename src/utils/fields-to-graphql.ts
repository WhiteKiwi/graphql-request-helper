import { Field } from '../models'

export function fieldsToGraphQL(fields: (string | Field)[]): string {
	const fieldString: string[] = []
	for (const field of fields) {
		if (typeof field === 'string') fieldString.push(field)
		else fieldString.push(fieldToString(field))
	}
	if (fieldString.length > 0) return `{ ${fieldString.join('\n')} }`
	return ''
}

function fieldToString(field: Field): string {
	const fields: string[] = []
	for (const subField of field.fields) {
		if (typeof subField === 'string') fields.push(subField)
		else fields.push(fieldToString(subField))
	}
	return `${field.name} {
		${fields.join('\n')}
	}`
}
