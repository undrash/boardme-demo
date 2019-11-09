
const path      = require( "path" );



module.exports = {
    context: path.join( __dirname, "src/script" ),
    entry: {
        dashboard: "./Dashboard.ts",
        items: "./Items.ts"
    },
    mode: "development",
    module: {
        rules: [
            { test: /\.html$/, use: "html-loader" },
            { test: /\.js$/, loader: "source-map-loader", enforce: "pre" },
            { test: /\.ts$/, loader: "ts-loader" },
            { test: /\.css$/, use: [ "style-loader", "css-loader" ] },
            { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
            { test: /\.(jpg|png|svg|gif)$/, use: { loader: "file-loader", options: { name: "[name].[ext]", outputPath: "../img/", publicPath: "/Boardme-demo/img" } } },
            { test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/, use: { loader: "file-loader", options: { name: "[name].[ext]", outputPath: "../fonts/", publicPath: "/public/fonts" } } },
            { include: path.resolve(__dirname, "node_modules/pixi.js"), loader: "transform-loader?brfs", enforce: "post" }
        ]
    },
    resolve: {
        extensions: [
            ".ts"
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./build")
    }

};