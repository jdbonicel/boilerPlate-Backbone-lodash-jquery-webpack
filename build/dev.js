console.log( 'start dev....' );

var webpack = require( 'webpack' );
var config = require( './webpack.dev' );
var webpackDevServer = require( 'webpack-dev-server' );

var port = 8080;


config.entry.home.unshift( 'webpack-hot-middleware/client' );

var compiler = webpack( config );
var hotMiddleWare = require( 'webpack-hot-middleware' )( compiler );


var server = new webpackDevServer( compiler, {
    hot: true,
    contentBase: './',
    quiet: false,
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
} );


server.use( hotMiddleWare );

server.listen( port, function ( err ) {
    if ( err ) {
        console.log( err );
    } else {
        console.log( 'listening on port : ' + port );
    }
} );
