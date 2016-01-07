var path = require("path"),
	webpack = require("webpack");
	
var __DEV__ = "false";

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin("./js/common.js"),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		}
	}),
	devFlagPlugin = new webpack.DefinePlugin({
		__DEV__: __DEV__ || "false"
	});

module.exports = {
	// 插件项
	plugins: [commonsPlugin, uglifyJsPlugin, devFlagPlugin, new ExtractTextPlugin("./css/h5.css", {
            allChunks: true
        })],
	// 页面入口文件配置
	entry: [
		"./jsdev/main.js"
	],
	// 入口文件输出配置
	output: {
		filename: "./js/main.js"
	},
	module: {
		// 加载器配置 -loader  可以省略不写
		loaders: [
			{ test: /\.js[x]?$/, exclude: /node_modules/,loader: "babel-loader?presets[]=es2015&presets[]=react"},
			{ test: /\.scss$/, exclude: /node_modules/,loader: ExtractTextPlugin.extract("style", "css!autoprefixer!sass")},
			{ test: /\.(png|jpg|gif|jpeg|svg)$/, exclude: /node_modules/,loader: "url?limit=8192"}
		]
	},
	// 其他解决方案配置
	resolve: {
		alias: {

		}
	}
};