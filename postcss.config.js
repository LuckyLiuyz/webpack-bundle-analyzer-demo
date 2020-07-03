/**
 * @file 当webpack.config.js配置module.rules postcss-loader 规则时，需要配套进行此文件的相关设置！否则打包到相关文件时就会报错提示缺少postcss.config！
 * @param {*} param0 
 */

module.exports = () => {
  const pluginsConfig = {
    autoprefixer: {}, // 自动添加浏览器前缀
  };
  return {
    plugins: pluginsConfig
  };
};
