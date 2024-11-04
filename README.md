# webpack-bundle-analyzer-demo

探索 webpack 的可视化资源分析工具 webpack-bundle-analyzer 的使用

## 命令

```
- `npm run start` 命令，用于启动项目；
- `npm run build` 命令，用于打包项目；
- `npm run analyz` 命令，用于启动webpack-bundle-analyzer分析打包结果中各个依赖的占用情况；
```

### 执行 `npm run analyz` 命令后的分析结果图如下

![blockchain](https://github.com/Lucky-LYZ/webpack-bundle-analyzer-demo/blob/master/src/img/webpack-bundle-analyzer%E5%88%86%E6%9E%90%E7%BB%93%E6%9E%9C%E5%9B%BE.png "webpack-bundle-analyzer分析结果图")

## 其他
### source-map-explorer分析打包产物
使用source-map-explorer工具，可以基于打包生成的产物，执行 ‘source-map-explorer bundle.min.js’ 命令进行分析产物构成。
详情参加：[source-map-explorer](https://www.npmjs.com/package/source-map-explorer)
