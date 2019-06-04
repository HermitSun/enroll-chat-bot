const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

// 生产环境部署的路径
const BASE_URL = process.env.NODE_ENV === 'production' ? '/qna/' : '/';

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'qna',
  assetsDir: '', // 放置生成的静态资源路径，默认在outputDir
  indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
  pages: undefined, // 构建多页
  productionSourceMap: false, // 开启生产环境的 source map
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'));
    config.resolve.extensions
      .add('*', '.js', '.json', '.vue');
  },
  configureWebpack: () => {
  },
  // css: {
  //     //     modules: false, // 启用 CSS modules
  //     //     extract: true, // 使用CSS分离插件
  //     //     sourceMap: false, // 开启 CSS source maps
  // },
  devServer: {
    port: 8085, // 端口号
    https: false, // https:{type:Boolean}
    open: true // 配置自动启动浏览器
  }
};
