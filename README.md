# vscode-open-in-browser
> vscode 增加在浏览器打开命令

 * 在文件的右键菜单里里加入 open In Browser菜单
 * 点击 open In Browser 会首先判断配置中的enableHost是否启用 如果没有启用则直接唤起浏览器打开本地文件 如：file:///xxx/xx.html 如果启用则会把 documentRoot 替换为http://host 后打开 
 ``` 
 比如本地文件路径是 
 
 /www/github/vscode-test/index.html 
 ```
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
## 配置
``` json
  "qingyangmoke.openInBrowser.documentRoot": "/Users/song/Develop/",
  "qingyangmoke.openInBrowser.enableHost": true,
  "qingyangmoke.openInBrowser.host": "localhost",
```