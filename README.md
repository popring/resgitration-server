# 考试报名系统服务端

软件实训，实操项目。

考试报名系统前端项目：[registration-system](https://github.com/popring/registration-system)

## 采用技术

- express



## 本地开发

```
git clone git@github.com:popring/resgitration-server.git

cd registration-server

// 可以使用 yarn 替代
npm i

// 运行 yarn start
npm run start
```

## SQL 文件

导入数据库 /sql/bmxt.sql

## 升级更新

>2020年7月20日20点09分
>
>- 学生获取所有专业信息接口改变，科目信息修改为返回数组

## API文档

[RESTful_API.md](./RESTful_API.md) 只有几个简单的案例，没有写完整。

## 任务

- [x] jwt 鉴权< `student`, `admin` >
- [x] 修改返回数据的 `http` 状态码
- [x] 使用 `orm` 模式调用数据库
- [x] API文档（示例）
- [ ] 用户密码进行加密（选做）
- [x] 分页功能

学生端

- [x] 系统主页 报名进度

- [x] 通知公告

- [x] 现在报名

- [x] 成绩查询

- [x] 录取查询

管理端（由于当时时间紧急，采用 jsp 完成（未公开），可能后期不会使用node重写）

- [x] 系统主页(无请求)

- [x] 学生管理

- [x] 审核管理

- [x] 成绩管理

- [x] 公告管理

- [ ] `/config/db.js` 文件可删除
