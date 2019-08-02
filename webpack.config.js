const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    devtool:'inline-source-map',
    devServer: {
        contentBase: './dist'
        },
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                use: ['vue-loader'] 
            },
            {
                test:/\.css$/,
                use:['vue-style-loader','css-loader'],
            },
            {
                test:/\.scss$/,
                use:['vue-style-loader','css-loader','sass-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg|gif|png)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: require.resolve('jquery'),
                use: [{
                  loader: 'expose-loader',
                  options: 'jQuery'
                },{
                  loader: 'expose-loader',
                  options: '$'
                }]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin() ,
        new HtmlWebpackPlugin({template:'src/index.html'})
    ]
}