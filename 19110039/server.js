// Họ và tên: Hồ Huy Luật
// MSSV: 19110039
const express = require('express');
const app = express();
const PORT = 5000;
var path = require('path');
const createBlogReq = require('./routes/routes.createBlog');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs'); // set view engine
app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use((req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/', createBlogReq);

app.listen(PORT);