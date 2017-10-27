var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:32768/articlesdb',{
useMongoClient:true
},err=>{
    if (err) {
        console.log(err.message);
        return;
    }

    console.log('数据库已连接');
});
