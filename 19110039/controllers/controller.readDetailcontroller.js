const {myblog} = require('../models/models.myblog');
// controller thực hiện chức năng trả về thông tin chi tiết của bài viết đó
function ReadDetailRequest(req,res){
  // lấy id bài viết muốn xem chi tiết
  const ID= Number(req.params.id);
  for( let item of myblog){
    if(item.id==ID){
        res.render('ReadDetail', {id: item.id, content: item.content, comment: item.comment, lenght: myblog?.length});
    }
  } 
}

module.exports = {
    ReadDetailRequest
}