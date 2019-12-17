//进行文章的接口处理
var article = {
    //1.分类信息获取
    getCate: function (options) {
        $.ajax({
            url: "http://localhost:8000/admin/category_search",
            success: function (res) {
                console.log(res);
                if (res.code === 200) {
                    options.success(res);
                }

            }
        })
    }
}