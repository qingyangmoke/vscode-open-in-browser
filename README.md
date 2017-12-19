# vscode-open-in-browser
> vscode 插件 
> 1. 在文件的右键菜单里里加入 open In Browser菜单
> 2. 点击 open In Browser 会首先判断配置中的enableHost是否启用 如果没有启用则直接唤起浏览器打开本地文件 如：file:///xxx/xx.html 如果启用则会把 documentRoot 替换为http://host 后打开 


## 配置
``` json
"qingyangmoke.openInBrowser.documentRoot": "/Users/song/Develop/",
"qingyangmoke.openInBrowser.enableHost": true,
"qingyangmoke.openInBrowser.host": "localhost",
```


 
 *比如本地文件路径是* /www/github/vscode-test/index.html 

 启用host的方式
  ``` js
  1.修改配置

  "qingyangmoke.openInBrowser.documentRoot": "/www/",
  "qingyangmoke.openInBrowser.enableHost": true,
  "qingyangmoke.openInBrowser.host": "localhost"

  2.打开后的地址为：
  
  http://localhost/github/vscode-test/index.html
  ```

  未启用host方式

  ``` js
"qingyangmoke.openInBrowser.enableHost": false,

打开后的地址为：

file:///www/github/vscode-test/index.html
  ```

## 本地编译

```
1. 全局安装 vsce

  npm i vsce -g 

2. 安装依赖

  npm i

3. 编译
  npm run build

```

## 安装到vscode

``` 
vscode -> 扩展-> 从 vsix 安装 -> 选择上面编译好的文件

./dist/vscode-open-in-browser-x.x.x.vsix

```