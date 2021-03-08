const { Article } = require('../../model/article')
// 导入分页模块
const pagination = require('mongoose-sex-page')

module.exports = async (req, res) => {
    // 获取页码值
    const page = req.query.page

    // 从数据库中查询数据
    let result = await pagination(Article).find().populate('author').page(page).size(4).display(5).exec()
	result = JSON.stringify(result)
	let articles = JSON.parse(result)
    // res.send(articles)
    // return
    // 渲染模板并传递数据
    res.render('home/default.art', {
        result: articles
    })
}