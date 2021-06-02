根据这篇文章[使用Mocha+spectron测试Electron打包的桌面版程序（2）PO模型](https://blog.csdn.net/DaxiaLeeSuper/article/details/78107686?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522162260106616780271581467%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=162260106616780271581467&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-3-78107686.first_rank_v2_pc_rank_v29&utm_term=spectron&spm=1018.2226.3001.4187)，结合[spectron官方文档](https://github.com/electron-userland/spectron/blob/master/README.md)、[mochawesome](https://www.npmjs.com/package/mochawesome)、[mocha configuration file](https://mochajs.org/#configuring-mocha-nodejs)对electron桌面APP的UI自动化测试。

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

解决方案2： 

下载对应的浏览器版本（80.0.3987.165）

3. 运行

`mocha runtest`
