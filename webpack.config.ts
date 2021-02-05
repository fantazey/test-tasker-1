import path from 'path';
import webpack, {Configuration} from 'webpack';
import HTMLPlugin from 'html-webpack-plugin';
import TypeCheckPlugin from 'fork-ts-checker-webpack-plugin';
import {TsconfigPathsPlugin} from 'tsconfig-paths-webpack-plugin';

const config = (env: any): Configuration => ({
    entry: './src/index.tsx',
    ...(env.production || !env.development ? {} : {'devtool': 'eval-source-map'}),
    resolve:{
        extensions: [".ts", ".tsx", ".js"],
        // @ts-expect-error
        plugins: [new TsconfigPathsPlugin()],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options:{
                    transpileOnly: true
                },
                exclude: /dist/,
            }
        ]
    },
    plugins: [
        new HTMLPlugin({template: './public/index.html'}),
        new webpack.DefinePlugin({
            "process.env.PRODUCTION": env.production || !env.development,
            "process.env.NAME": JSON.stringify(require('./package.json').name),
            "process.env.VERSION": JSON.stringify(require('./package.json').version),
        }),
        new TypeCheckPlugin({
            eslint: {
                files: './src/**/*.{ts,tsx,js,jsx}'
            }
        })
    ]
});
export default config;