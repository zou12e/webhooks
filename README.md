### webhooks 使用node服务器

```
1. 准备自动发布的项目（webhooks 启动位置app.json）

2. 启动deploy.js服务

3. 准备deploy.sh脚本执行相关代码

4. 设置github webhooks 
  
   Settings -> Webhooks -> Add webhook 

            -> Payload URL (指向deploy.js项目) 

            -> Secret (设置一个密钥，deploy.js中使用)

            -> Add webhook


```