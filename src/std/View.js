var Backbone = require( 'backbone' );


module.exports = Backbone.View.extend( {

    constructor: function () {

        // Backbone.View( options )
        this.options = arguments[ 0 ] || {};

        Backbone.View.apply( this, arguments );

    }
} )
