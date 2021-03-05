// 创建用户集合
const mongoose = require('mongoose')

// 创建用户集合规则
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        // email 作为登陆凭证，需要保证唯一性
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        // admin 管理员
        // normal 普通用户
        type: String,
        required: true
    },
    status: {
        type: Number,
        // 0 为启用
        // 1 为禁用
        default: 0
    }
})

// 使用用户集合规则创建集合的构造函数
const User = mongoose.model('User', userSchema)

// 新建超级用户
// User.create({
//     username: 'Johnson',
//     email: 'johnsonxwy@gmail.com',
//     password: '123456sobad',
//     role: 'admin',
//     status: 0
// })
//     .then(() => console.log('Created admin user'))
//     .catch(() => console.log('Failed to create admin user'))

// 开放构造函数出去
module.exports = {
    User    // ES6 规定，如果 key 和 value 相同，可以只写 key，这里就等同于： User: User
}