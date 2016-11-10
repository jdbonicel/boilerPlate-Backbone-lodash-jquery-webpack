var path = require( 'path' );
var ExtractTextPlugin = require( "extract-text-webpack-plugin" );
var ExtractCSS = new ExtractTextPlugin( "bundle.css" );


var ROOT_PATH = path.join( __dirname, '../' );
var SOURCE_PATH = path.join( ROOT_PATH, './src/' );

module.exports = {
    entry: {
        home: [ './src/sass/reset.scss', './src/application/entries/home.js' ]
    },
    output: {
        path: path.join( ROOT_PATH, './dist/' ),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/dist/'
    },
    resolve: {
        root: [
            SOURCE_PATH
        ],
        extensions: [ '', '.js' ]
    },
    module: {
        preloaders: [ {
            test: /\.js$/,
            loader: 'eslint',
            exlude: /(node_modules)/
        } ],
        loaders: [ {
            // sass
            test: /\.scss$/i,
            loader: ExtractCSS.extract( [ 'css', 'sass' ] )
        }, {
            test: /\.html$/,
            loader: 'mustache'
        }, {
            test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: '[name]-[hash:7].[ext]'
            }

        } ]
    },
    plugins: [
        ExtractCSS
    ],
    eslint: {
        configFile: path.join( ROOT_PATH, './.eslintrc' )
    }
}
