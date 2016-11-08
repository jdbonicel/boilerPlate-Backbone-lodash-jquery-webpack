var View = require( 'std/View' );
var Template = require( 'templates/layouts/page.html' );

module.exports = View.extend( {

    constructor: function () {
        View.prototype.constructor.apply( this, arguments );
    },

    initialize: function () {

        View.prototype.initialize.apply( this, arguments );
        this.render();
    },

    template: function () {
        return _.template( Template( {
            title: 'Home'
        } ) );
    },

    render: function () {
        this.$el.html( this.template() );
        return this;
    }
} );
