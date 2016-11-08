console.log( 'start build....' );

var webpack = require( 'webpack' );
var config = require( './webpack.prod' );
var ora = require( 'ora' );

require( 'shelljs/global' );


console.log( 'remove dist folder..' );
rm( '-rf', 'dist' );

var spinner = ora( 'loading...' )
spinner.start();

webpack( config, function ( err, stats ) {

    spinner.stop();

    if ( err ) throw err;

    process.stdout.write( stats.toString( {
        colors: true,
        module: false,
        children: false,
        chunks: false,
        chunkModules: false
    } ) + '\n' )
} );
