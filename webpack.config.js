var webpack = require('webpack');
module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8081', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './public/app/main.js',
        "./public/styles/less/main.less"
        // './public/main.js'
    ],
    output: {
        path: __dirname + '/public/',
        filename: 'index.js',
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader?' + JSON.stringify({ presets: ['es2015', 'react']})],
            },
            {
                test: /\.less$/,
                loader: "style!css!autoprefixer!less"
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
