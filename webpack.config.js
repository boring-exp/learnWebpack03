// 运行环境 nodejs
import process from 'node:process'
import path from 'node:path'
const config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'main.bundle.js',
  },
  mode: 'production',
  module: {
    rules: []
  },
  plugins: []
}
export default config