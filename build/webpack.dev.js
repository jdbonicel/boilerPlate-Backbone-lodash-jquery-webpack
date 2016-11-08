var webpack = require( 'webpack' );
var config = require( './webpack.base' );


config.plugins = config.plugins.concat( [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
] )
module.exports = config;
