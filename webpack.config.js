export default function(webpackConfig){
	console.log("@@@@@@",webpackConfig.HtmlWebpackPlugin);

	webpackConfig.entry={
		a: './client/pages/a.js',
		b: './client/pages/b.js'
	};

	webpackConfig.output.filename = "[name].bundle.js"


	return webpackConfig;
}