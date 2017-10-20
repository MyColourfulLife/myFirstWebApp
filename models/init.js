var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.99.100:32799/articlesdb',{
useMongoClient:true
},err=>{
    if (err) {
        console.log(err.message);
        return;
    }

    console.log('数据库已连接');
});
