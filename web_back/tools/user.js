//创建一个user对象,在这里放各种方法,为了语义化
//使用user.js统一管理用户接口的ajax操作
//后期维护时，接口使用方式变化可以在user.js中管理
var user = {
    //1.login方法:传入一个options对象
    //1.用户登录方法
    login: function (options) {
        $.ajax({
            //!!!这里的LOGIN千万不能加"",这里是用的config.js当中设置好的地址
            url: LOGIN,
            type: "POST",
            data: {
                user_name: options.data.user_name,
                password: options.data.password
            },
            success: function (res) {
                if (res.code === 200) {
                    // console.log(res);
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    //2.用户退出方法
    logout: function (options) {
        $.ajax({
            url: LOGOUT,
            type: "POST",
            success: function (res) {
                // console.log(res);
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    //3.获取用户信息方法
    //分析getuser方法和user.getuser中res传递的参数
    /* 
    
    {
           options=success: function (res) {
                // console.log(res);

                $("#u_name").text(res.data.nickname);
                $("#user_img,.user_center_link img").prop('src', res.data.user_pic);
            }
        }
   
    */
    getuser: function (options) {
        $.ajax({
            url: GETUSER,
            type: "GET",
            success: function (res) {
                // console.log(res);

                if (res.code === 200) {
                    //用户调用这个方法时,把options.success(res)的res作为形参传给success: function (res)----因为接口在这边,就把接口里边的res传过去了
                    options.success(res);
                }
            }
        })
    },
    getArtCount: function (options) {
        $.ajax({
            url: GETARTCOUNT,
            type: "GET",
            success: function (res) {
                if (res.code === 200) {
                    options.success(res);
                }
            }
        })
    },

    getComCount: function (options) {
        $.ajax({
            url: GETCOMCOUNT,
            type: "GET",
            success: function (res) {
                if (res.code === 200) {
                    options.success(res);
                }
            }
        })
    },
    /* getMArtCount: function (options) {
        $.ajax({
            url: GETMARTCOUNT,
            type: "GET",
            success: function (res) {
                if (res.code === 200) {
                    options.success(res);
                }
            }
        })
    } */
}