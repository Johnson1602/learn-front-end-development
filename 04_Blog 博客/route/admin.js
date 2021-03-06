const express = require('express')

// 创建 admin 路由对象
const admin = express.Router()

// 访问登陆页面
admin.get('/login', require('./admin/login-page'))

// 用户登陆
admin.post('/login', require('./admin/login'))

// 进入用户页面
admin.get('/user', require('./admin/user'))

// 用户退出
admin.get('/logout', require('./admin/logout'))

// 访问编辑用户页面
admin.get('/user-edit', require('./admin/user-edit'))

// 添加新用户
admin.post('/user-add', require('./admin/user-add-fn'))

// 编辑已存在用户
admin.post('/user-edit', require('./admin/user-edit-fn'))

// 删除用户
admin.get('/delete', require('./admin/user-delete'))

// 文章管理页面
admin.get('/article', require('./admin/article'))

// 文章编辑页面
admin.get('/article-edit', require('./admin/article-edit'))

// 发布新文章
admin.post('/article-add-fn', require('./admin/article-add-fn'))

module.exports = admin