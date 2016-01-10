var path = require("path"),
	webpack = require("webpack"),
	OpenBrowserPlugin = require("open-browser-webpack-plugin");
	
var __DEV__ = "true",
	pathDev = "pc/jsdev/";

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin("./pc/js/common.js"),
	HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin(),
	OpenBrowserPlugin= new OpenBrowserPlugin({url: "http://localhost:19992"}),
	NoErrorsPlugin = new webpack.NoErrorsPlugin(),
	devFlagPlugin = new webpack.DefinePlugin({
		__DEV__: __DEV__ || "false"
	});

module.exports = {
	devtool: "source-map",
	// 插件项
	plugins: [commonsPlugin, devFlagPlugin, HotModuleReplacementPlugin, NoErrorsPlugin, OpenBrowserPlugin],
	// 页面入口文件配置
	entry: [
		"webpack/hot/dev-server",
		"webpack-dev-server/client?http://localhost:19992",		
		"./pc/jsdev/main.js"
	],
	// 入口文件输出配置
	output: {
		filename: "./pc/js/app.js"
	},
	module: {
		// 加载器配置 -loader  可以省略不写
		loaders: [
			{ test: /\.js[x]?$/, exclude: /node_modules/,loader: "babel-loader?presets[]=es2015&presets[]=react"},
			{ test: /\.scss$/, exclude: /node_modules/,loader: "style!css!autoprefixer!sass"},
			{ test: /\.(png|jpg|gif|jpeg|svg)$/, exclude: /node_modules/,loader: "url?limit=8192"}
		]
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		port: 19992
	},
	// 其他解决方案配置
	resolve: {
		alias: {
			"common" : path.join(__dirname, pathDev, "/common/common")
//			'react-router': path.join(__dirname, '..', 'modules')
		}
	}
};