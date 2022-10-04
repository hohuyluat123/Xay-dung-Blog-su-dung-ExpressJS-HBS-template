const {myblog} = require('../models/models.myblog');
//controller cho chức năng thêm comment vào bài viết
function CommentBlogRequest(req,res,next){
    const ID= Number(req.params.id); // lấy id của bài viết
    const comment= req.body.comment ;
    var list=[];
    list.push(comment);
    for( let i of myblog){
        if(i.id==ID){
            i.comment.push(comment); // thêm comment vào danh sách comment của bài viết
        }
    }
    res.redirect('/ReadDetail/'+ID);  // trả về trang xem chi tiết để xem tất cả thông tin bài viết
}

module.exports = {
    CommentBlogRequest
}