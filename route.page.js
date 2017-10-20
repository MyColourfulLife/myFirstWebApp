var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');
//提供页面的路由

// 主页
router.get('/',function (req,res,next) {
    res.render('index',{title:"home"});
});

// 列表页面
router.get('/posts',function (req,res,next) {
    res.render('posts',{title:'文章列表'});
});

// 文章详情页
router.get('/posts/show',function (req,res,next) {

    let id = req.query.id;

    PostModel.findById(id,(err,post)=>{
        if (err) {
            alert(err.message);
            return;
        }
    console.log(post);
        res.render('show',post);
    })
});

//写文章
router.get('/posts/create',function (req,res,next) {
    res.render('create',{title:"写文章"});
});

module.exports = router;