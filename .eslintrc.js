module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	env: {
		node: true,
	},
	globals: {
		process: 'writable',
		describe: 'writable',
		it: 'writable',
	},
	rules: {
		indent: [
			'error',
			'tab',
		],
		quotes: [
			'error',
			'single',
		],
		camelcase: [
			'error',
		],
		'prefer-arrow-callback': [
			'error',
		],
		'arrow-spacing': [
			'error',
		],
		semi: [
			'error',
			'never',
		],
		'no-unused-vars': [
			'error', { args: 'none' },
		],
		'eol-last': [
			'error',
			'always',
		],
		'brace-style': 'off',
		'@typescript-eslint/brace-style': ['error'],
		'no-multi-spaces': 'error',
		'keyword-spacing': 'off',
		'@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
		'comma-style': ['error', 'last'],
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
		}],
		'array-bracket-spacing': ['error', 'never'],
		'object-curly-spacing': ['error', 'always'],
		'key-spacing': ['error', { mode: 'strict' }],
		'arrow-spacing': ['error', { before: true, after: true }],
	},
}
