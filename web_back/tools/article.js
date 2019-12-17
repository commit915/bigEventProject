//进行文章的接口处理
var article = {
    //1.分类信息获取
    getCate: function (options) {
        $.ajax({
            url: GETCATE,
            success: function (res) {
                // console.log(res);
                if (res.code === 200) {
                    options.success(res);
                }

            }
        })
    },
    getCatAdd: function (options) {
        $.ajax({
            url: GETCATADD,
            type: "POST",
            data: {
                name: options.data.name,
                slug: options.data.slug
            },
            success: function (res) {
                if (res.code === 200) {
                    options.success(res);
                } else {
                    options.fail(res);
                }
            }
        })
    },
    getCatEdit: function (options) {
        $.ajax({
            url: GETCATEDIT,
            type: "POST",
            // data: $("#form").serialize(),
            data: {
                id: options.data.id,
                name: options.data.name,
                slug: options.data.slug
            },
            success: function (res) {
                if (res.code === 200) {
                    options.success(res);
                } else {
                    options.fail(res);
                }
            }
        })
    },
    getCatDel: function (options) {
        $.ajax({
            url: GETCATDEL,
            type: "POST",
            data: {
                id: options.data.id
            },
            success: function (res) {
                if (res.code === 200) {
                    options.success(res);
                }
            }
        })
    }


}