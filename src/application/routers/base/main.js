var _ = require( 'lodash' );
var Router = require( 'std/Router' );


module.exports = Router.extend( {

    pages: {},

    routes: {},

    initialize: function () {
        Router.prototype.initialize.apply( this, arguments );
    },

    _createPage: function ( id, ClassName, options ) {
        options = options || {};
        _.defaults( options, {
            el: 'body'
        } );
        this.pages[ id ] = new ClassName( options );
        return this.pages[ id ];
    },

    _createOrResetPage: function ( id, ClassName, options ) {

        var _id = id,
            _class = ClassName,
            _opt = options;

        if ( typeof id === 'function' ) {
            _id = 'defaultId';
            _class = id;
            _opt = ClassName;
        }

        if ( this.pages[ _id ] ) {
            this.pages[ _id ].reset();
            this._activePage = this.pages[ _id ];
        } else {
            this._activePage = this._createPage( _id, _class, _opt );
        }

        return this._activePage;
    }
} );
