// 运行环境 nodejs
import process from 'node:process'
import path from 'node:path'
import { VueLoaderPlugin } from 'vue-loader'

const config = {
  // 入口
  entry: './src/main.js',
  // 输出
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'main.bundle.js',
  },
  mode: 'production',
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
        use: ['style-loader', 'css-loader'] }
    ]
  },
  // 配置webpack plugin
  plugins: [
    new VueLoaderPlugin(),
  ]
}
export default config