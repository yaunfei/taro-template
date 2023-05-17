# taro 小程序项目模板

### 1. 目录介绍
1. `common\`下是公共`common\util`和`common\config\`配置文件
    1. `common\config\`下`constant`配置一些公共变量
    2. `domain`是配置业务域名
    3. `reg`正则表达式的一些规则
2. `config\`下式配置打包规则
    1. 使用了自定义的`postcss`插件`postcss-transform-mini`。将`less`里面书写的`html`标签转变为小程序标签
3. `src\pages\`业务相关代码
    1. `src\pages\common\`公共组件。`error`报错默认页面（请求返回不是200、401、403会默认跳转到这个页面，可以通过设置请求参数`quiet: true`，处理报错）。`loginPage`登陆页面，如果请求需要鉴权会自动跳转到这个页面，同事可以使用`goLogin`跳转到登陆页面。`webViewPage`小程序打开`webView`页面。
    2. `my`我的页面。包含用户协议，和隐私协议（`openProtocol`方法打开具体的协议）。登陆按钮等。
4. `src\request` 请求业务逻辑。使用了`@yaunfei/taro-request`包。
5. 路由跳转，传递参数使用的是`@yaunfei/taro-router`包。
### 2. 配置
1. 配置`appid`： `common\config\constant.ts`进行修改`APP_ID`;`project.config.json`进行修改`appid`。
2. 配置域名：`common\config\domain.ts`中进行自定义或修改域名。
### 3. 启动
1. `build:weapp`打包微信小程序。`dev:weapp`开发环境。