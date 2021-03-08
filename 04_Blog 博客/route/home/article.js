const { Article } = require('../../model/article')
const { Comment } = require('../../model/comment')

module.exports = async (req, res) => {
    const { id } = req.query

    let article = await Article.findOne({_id: id}).populate('author').lean()

    let comments = await Comment.find({aid: id}).populate('uid').lean()

    // res.send(article)
    // return

    res.render('home/article', { article, comments })
}