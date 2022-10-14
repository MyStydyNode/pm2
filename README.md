# pm2
学习小满服务端

## 安装&目录
```sh
$ npm install -g pm2
```
> 安装成功之后检查
> ```sh
> $ pm2 -v
> ```
>

## 常用命令
### 启用命令
```sh
$ pm2 start app.js
```
### 查看日志
```sh
$ pm2 log
```
### 查看所有进程
```sh
$ pm2 list
```
### 停止命令
#### 停止单个的
```sh
$ pm2 stop app_name | app_id
```
#### 停止所有
```sh
$ pm2 stop all
```
### 重启命令
```sh
$ pm2 restart app_name | app_id
```
### 删除命令
```sh
$ pm2 delete app_name | app_id
```
### 常用参数命令
- --watch：监听应用目录的变化，一旦发生变化，自动重启。
- -i or --instance：启用多少个实例，可用于负载均衡，如果 -i 0 或者 -i max，则根据当前机器核数确定实例数目。
- --ignore-watch：排除监听的目录或文件，可以是特定的文件名，也可以是正则。