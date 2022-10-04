const express = require('express');
const {CreateBlogRequest} = require('../controllers/controller.createblogcontroller');
const {CommentBlogRequest} = require('../controllers/controller.commentcontroller');
const {ReadRequest} = require('../controllers/controller.readcontroller');
const {ReadDetailRequest} = require('../controllers/controller.readDetailcontroller');
const { DeleteBlogRequest} = require('../controllers/controller.deletecontroller');
const { EditBlogRequest} = require('../controllers/controller.editcontroller');
const { GetEditBlogRequest} = require('../controllers/controller.editcontroller');
const router = express.Router();
var bodyParser = require('body-parser');
const { myblog } = require('../models/models.myblog');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
 // method post để tạo bài viết
router.post('/create',urlencodedParser, CreateBlogRequest);
// method post để lưu comment bài viết
router.post('/comment/:id',urlencodedParser, CommentBlogRequest);
// xóa bài viết
router.get('/delete/:id',urlencodedParser,  DeleteBlogRequest);
// edit bài viết
router.post('/edit/:id',urlencodedParser, EditBlogRequest);

router.get('/', ReadRequest);

router.get('/create', (req, res)=>{
    res.render('create');
});
router.get('/edit/:id',GetEditBlogRequest);
// trả về list bài viết
router.get('/home', ReadRequest);
// xem chi tiết bài viết
router.get('/ReadDetail/:id', ReadDetailRequest);
module.exports = router