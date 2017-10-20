var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');

//提供数据的路由

// 获取数据列表
router.get('/posts',function (req,res,next) {
    PostModel.find({},{},(err,postLists)=>{
        if (err) {
            res.json({
                success:false
            });
            return;
        }
        res.json({
            success:true,
            postLists:postLists
        });
    });
});


// 发送文章
router.post('/post',function (req,res,next) {
    // 存入数据库
    var title = req.body.title;
    var content = req.body.content;
    var postModel = new PostModel();
    postModel.title = title;
    postModel.content = content;
    postModel.save(err=>{
        res.json({
            success:!err
        });
    })
});



module.exports = router;