//这些路径下的文件都不需要 token 验证
//把不需要 token 验证的请求填进下面即可，支持数组、字符串、正则
whiteList = [
    //article路由
    '/article/getArticleNames',
    '/article/getArticleByName',
    '/article/getArticleIntro',
    '/article/getArticleTypeByName',
    'article/addLike',
    '/article/fuzzyGetArticleIntro',

    //articleType路由
    '/articleType',

    //图片许可路由
    '/picture/getPictureAuth',

    //用户路由
    '/user/login',
    '/user/getVerificationCode',
    '/user/register',

    //评论路由
    '/comment/getCommentsByArticle'

]

module.exports = whiteList;