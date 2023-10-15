import path from 'node:path'
import { fileURLToPath } from 'node:url';
import { VueLoaderPlugin } from 'vue-loader/dist/index.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}

export default config