import { defineConfig, globalIgnores } from 'eslint/config';
import ckeditor5Config from 'eslint-config-ckeditor5';

export default defineConfig( [
	globalIgnores([
		'build/*',
		'webpack.config.js'
	]),
	{
		extends: ckeditor5Config
	},
] );
