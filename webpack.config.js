const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// 获取 `npm run ** `中携带的参数
const { env } = process;
console.log({ env });
module.exports = () => {
  let config = {
    mode: 'development',
    entry: __dirname + '/src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist')
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ["env", "react"]
              }
            }
          ]
        },
        {
          test: /.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'less-loader'
          ]
        },
        {
          test: /.png$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024, // 10 KB
              name: '[name].[hash:4].[ext]', // 设置处理后的文件名称格式
            }
          }
        }
      ]
    },
    devServer: {
      host: '127.0.0.1', //指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，可指定为当前主机ip
      port: 9000, // 端口号
      contentBase: './dist', // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
      hot: true,
      open: true, //启用打开后，开发服务器启动后将自动打开浏览器
    },
    plugins: [
      new CleanWebpackPlugin(),
      // 用于生成 index.html
      new HtmlWebpackPlugin({
        title: 'Ideal Webpack Develop Env',
        meta: {
          viewport: 'width=device-width'
        },
        template: __dirname + '/src/index.html'
      }),
    ]
  }

  if (env.analyz === 'true') {
    return merge(config, {
      plugins: [
        new CleanWebpackPlugin(),
        // 用于生成 index.html
        new HtmlWebpackPlugin({
          title: 'Ideal Webpack Develop Env',
          meta: {
            viewport: 'width=device-width'
          },
          template: __dirname + '/src/index.html'
        }),
        new BundleAnalyzerPlugin(
          {
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8889,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info'
          }
        ),
      ]
    })
  }
  return config;
}
