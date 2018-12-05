const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',

    entry: './server.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'stage-0',
                            ['env', { 'modules': false }],
                        ],
                        plugins: [
                            ["transform-object-rest-spread", { "useBuiltIns": true }],
                            ["transform-class-properties"],
                            ["transform-runtime"],
                        ],
                    }
                }
            },
        ]
    },

    externals: [webpackNodeExternals()],
    
};