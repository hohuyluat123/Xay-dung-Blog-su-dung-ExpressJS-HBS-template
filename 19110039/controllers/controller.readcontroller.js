const {myblog} = require('../models/models.myblog');
// controller thực hiện chức năng trả về trang home danh sách bài viết
function ReadRequest(req,res){
  
  res.render('index', {list: myblog});
  
}

module.exports = {
    ReadRequest
}