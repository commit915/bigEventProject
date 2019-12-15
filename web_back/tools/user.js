var user = {
    login: function (options) {
        $.ajax({
            url: LOGIN,
            type: "POST",
            data: {
                user_name: options.data.user_name,
                password: options.data.password
            },
            success: function (res) {
                if (res.code === 200) {
                    console.log(res);

                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    }
}