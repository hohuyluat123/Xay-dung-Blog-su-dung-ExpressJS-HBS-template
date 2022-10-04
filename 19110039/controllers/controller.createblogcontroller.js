const {myblog} = require('../models/models.myblog');
// controller thực hiện chức năng tạo bài viết mới
function CreateBlogRequest(req,res,next){
    var list=[];
    let maxID;
    // tìm id max trong mảng để tạo id cho bài viết mới
    if(myblog?.length==0){
        maxID=0;
    }else{
        maxID=myblog[0].id;
        for(let i of myblog){
            if(i.id>maxID){
                maxID=i.id;
            }
        }
        maxID=maxID+1;
    }
    
    const item={id: maxID, content: req.body.mycontent, comment: list };
    myblog.push(item); // thêm bài viết mới vào list bài viết
    res.redirect('/home'); // trả về trang home để xem danh sách các bài viết
}

module.exports = {
    CreateBlogRequest
}