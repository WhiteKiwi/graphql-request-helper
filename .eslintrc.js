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
		'comma-dangle': [
			'error',
			'always-multiline',
		],
	},
}
