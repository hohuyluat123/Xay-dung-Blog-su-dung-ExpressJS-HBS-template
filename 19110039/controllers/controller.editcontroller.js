const {myblog} = require('../models/models.myblog');
// controller thực hiện chức năng edit bai viết
function EditBlogRequest(req,res){
    // lấy id bài viết muốn edit
    let ID=Number(req.params.id);
    for(let i of myblog){
        if(i.id==ID){
            i.content=req.body.content; // lưu content đã được edit
        }
    }
    res.redirect('/ReadDetail/'+ID); // trả về trang chi tiết bài viết để xem 
}
// thực hiện chức năng load lại thông tin của bài viết đang muốn edit
function GetEditBlogRequest(req, res){
    const ID= Number(req.params.id);
    for(let i of myblog){
        if(i.id==ID){
            res.render('edit', {id: i.id, content: i.content, comment: i.comment});
        }
    }
}

module.exports = {
    EditBlogRequest,
    GetEditBlogRequest
}