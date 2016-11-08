var Router = require( 'application/routers/base/main' );
var HomeView = require( 'views/pages/Home' );

module.exports = Router.extend( {

    routes: _.extend( {}, Router.prototype.routes, {
        '': 'home'
    } ),

    home: function () {
        this._createOrResetPage( HomeView );
    }

} );
