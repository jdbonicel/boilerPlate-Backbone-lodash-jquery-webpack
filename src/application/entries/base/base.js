require( 'application/entries/base/main' );

var Backbone = require( 'backbone' );

module.exports = {

    unpack: function ( RouterClass ) {

        // Register application routes.
        new RouterClass();

        Backbone.history.start( {
            pushState: true,
            hashChange: false
        } );

    }

};
