class HtmlWebpackPluginPrefixer {
	constructor(options) {
		this.options = Object.assign({
			prefix: '',
			filename: 'index.html'
		}, options);
	}

	apply(compiler) {
		const self = this;

		compiler.plugin('compilation', compilation => {
			compilation.plugin(
				'html-webpack-plugin-before-html-processing',
				(htmlPluginData, callback) => {
					const filename = htmlPluginData.plugin.options.filename;

					if (process.argv.includes('-p') && filename === self.options.filename) {
						/* eslint-disable no-param-reassign */

						htmlPluginData.assets.js = htmlPluginData.assets.js
							.map(value => `${self.options.prefix}${value}`);

						/* eslint-enable no-param-reassign */
					}
					callback(null, htmlPluginData);
				});
		});
	}
}

module.exports = HtmlWebpackPluginPrefixer;
