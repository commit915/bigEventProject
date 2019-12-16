//使用config.js统一管理接口地址
//后期维护时，接口地址变化可以在config.js中统一修改，无需到每个html文件中操作
// 通过全大写、使用_连接的变量名进行接口地址管理

var BASE_URL = "http://localhost:8000";
var LOGIN = BASE_URL + "/admin/login";
var LOGOUT = BASE_URL + "/admin/logout";
var GETUSER = BASE_URL + "/admin/getuser";
var GETARTCOUNT = BASE_URL + "/admin/article_count";
var GETCOMCOUNT = BASE_URL + "/admin/comment_count";
var GETMARTCOUNT = BASE_URL + "/admin/month_article_count";