//创建一个user对象,在这里放各种方法,为了语义化
//使用user.js统一管理用户接口的ajax操作
//后期维护时，接口使用方式变化可以在user.js中管理
var user = {
    //1.login方法:传入一个options对象
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

    logout: function (options) {
        $.ajax({
            url: LOGOUT,
            type: "POST",
            success: function (res) {
                console.log(res);
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    }
}