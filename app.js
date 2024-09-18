//1. 导入 express
const express = require('express');
 
//2. 创建应用对象
const app = express();
 
//3. 创建路由规则
app.get('/home', (req, res) => {
  res.end('hello express server');
});
 
//4. 监听端口 启动服务
app.listen(3000, () =>{
  console.log('服务已经启动, 端口监听为 3000...');
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, function() { console.log('listening on 3000') })
module.exports = app;