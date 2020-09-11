const path=require('path')
const webpack=require('webpack')

module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'src')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:'file-loader'
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:'file-loader'
            },
            // {
            //     test:/\.(png|jpg|gif)$/,
            //     use:[
            //         {
            //           loader: 'url-loader',
            //           options: {
            //             limit: 1
            //           }
            //         }
            //     ]
            // }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        host:'localhost',
        port:8100,
        hot:true,
        contentBase:'./src'
    }
}