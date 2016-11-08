var HomeEntry = require( 'application/entries/base/base' );
var HomeRouter = require( 'application/routers/home' );
var $ = require( 'jquery' );
require( 'sass/home.scss' );

$( document ).ready( function () {
    HomeEntry.unpack( HomeRouter );
} );
