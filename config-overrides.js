const path = require('path')
const { override, addWebpackAlias } = require('customize-cra')
//配置快捷路径
const webpackAlias = addWebpackAlias({
	'@': path.resolve(__dirname, 'src'),
	'@scss': path.resolve(__dirname, 'src', 'assets', 'styles'),
})
//导出覆盖的webpack配置
module.exports = override(webpackAlias)
