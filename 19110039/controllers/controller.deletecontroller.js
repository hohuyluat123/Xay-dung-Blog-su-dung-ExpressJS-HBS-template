const {myblog} = require('../models/models.myblog');
// controller thực hiện chức năng xóa bài viết
function DeleteBlogRequest(req,res,next){
    // lấy id bài viết muốn xóa
    let ID=Number(req.params.id);
    for( var i=0;i<myblog?.length;i++){
        if(myblog[i].id==ID){
            myblog.splice(i,1);
        }
    }
    res.redirect('/home'); // trả về trang home
}

module.exports = {
    DeleteBlogRequest
}