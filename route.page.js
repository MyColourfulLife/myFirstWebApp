var express = require("express");
var router = express.Router();
var PostModel = require("./models/post");
var marked = require("marked");
var highlight = require('highlight');
//提供页面的路由

// 主页
router.get("/", function(req, res, next) {
  res.render("index", { title: "home" });
});

// 列表页面
router.get("/posts", function(req, res, next) {
  res.render("posts", { title: "文章列表" });
});

// 文章详情页
router.get("/posts/show", function(req, res, next) {
  let id = req.query.id;

  PostModel.findById(id, (err, post) => {
    if (err) {
      console.log(err.message);
      return;
    }

    // post.content = marked(post.content);
    // res.render("show", { post });

    // return;//后面是异步的 代码高亮 暂时不用
    // Async highlighting with pygmentize-bundled
    marked.setOptions({
      highlight: function(code, lang, callback) {
        require("pygmentize-bundled")(
          { lang: lang, format: "html" },
          code,
          function(err, result) {
            callback(err, result.toString());
          }
        );
      }
    });

    // Using async version of marked
    marked(post.content, function(err, content) {
      if (err) throw err;
      post.content = content;
      console.log(post.content);
      res.render("show", { post });

    });



  });
});

//写文章
router.get("/posts/create", function(req, res, next) {
  res.render("create", { title: "写文章" });
});

module.exports = router;
