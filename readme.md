1. 安装依赖
electron@13.0.1
spectron@15.0.0
mocha@8.4.0
mochawesome@6.2.2


2. 浏览器版本和驱动一致，否则会报错
```
Error: Failed to create session.
session not created: This version of ChromeDriver only supports Chrome version 91
Current browser version is 80.0.3987.165 with binary path d:\study\spcetron\node_modules\spectron\lib\launcher.bat

```
解决方案1（采用此方案）：
替换 `\node_modules\electron-chromedriver\bin` 下的 `chromedriver.exe`为对应版本（80.0.3987.165）的驱动

采用该方案原因：app里的浏览器版本是开发写死的改不动...
[chromedriver下载](https://chromedriver.chromium.org/downloads)

解决方案2： 下载对应的浏览器版本（80.0.3987.165）

3. 更改exepath
`./pageobjects/home.page.js` 的`exepath`替换成你的app路径

4. 运行
`mocha runtest`
