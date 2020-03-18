module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
	  'no-console': 'off',
	  'no-debugger': 'off',
	  'no-unused-vars':'off',
	  indent: [
		  0,
		  4
	  ],
	  'vue/no-unused-components': 'warning',
	  "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
	  "no-mixed-spaces-and-tabs": [0],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
