// 运行环境 nodejs
import process from 'node:process'
import path from 'node:path'
import { VueLoaderPlugin } from 'vue-loader'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack';
const { ProgressPlugin } = webpack;
import CopyPlugin from 'copy-webpack-plugin'


const config = (env) => {
  return {
    // 入口
    entry: './src/main.js',
    // 输出
    output: {
      path: path.resolve(process.cwd(), 'dist'),
      filename: 'js/[name].[fullhash:8].js'
    },
    mode: 'production',
    devtool: env.mode === 'prod' ? 'nosources-source-map' : 'eval-source-map',
    // 配置webpack loader
    module: {
      rules: [
        {
          // 匹配文件后缀名
          test: /\.vue$/,
          // 注意检查loader是否安装了
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          // loader有执行顺序，从右往左
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.s[ac]ss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset',
          generator: {
            filename: 'img/[name].[hash:8][ext]'
          }
        },
        // 处理svg
        {
          test: /\.(svg)(\?.*)?$/,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name].[hash:8][ext]'
          }
        },
        // 处理音视频文件
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          type: 'asset',
          generator: {
            filename: 'media/[name].[hash:8][ext]'
          }
        },
        // 处理字体文件
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
          type: 'asset',
          generator: {
            filename: 'fonts/[name].[hash:8][ext]'
          }
        },
      ]
    },
    // 配置webpack plugin
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/main.[fullhash:8].css'
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new ProgressPlugin(),
      new CopyPlugin({
        patterns: [
          { from: 'public' },
        ],
      })
    ],
    devServer: {
      watchFiles: ['src/**/*', 'public/**/*'],
      static: {
        directory: path.join(process.cwd(), 'public'),
      },
      hot: true,
      compress: true,
      port: 5173,
      client: {
        progress: true
      },
      open: true,
    },
  }
}
export default config