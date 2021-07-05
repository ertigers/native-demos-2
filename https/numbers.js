// HTTP 状态码知道哪些？分别什么意思？
// 1**	信息，服务器收到请求，需要请求者继续执行操作
// 2**	成功，操作被成功接收并处理
// 3**	重定向，需要进一步的操作以完成请求
// 4**	客户端错误，请求包含语法错误或无法完成请求
// 5**	服务器错误，服务器在处理请求的过程中发生了错误
// 完整参考：https://www.runoob.com/http/http-status-codes.html

// 常见的状态码：
// 200：成功
// 301：永久移动，永久重定向
// 302：临时移动，临时重定向
// 304：未修改
// 400：客户端请求错误
// 401：客户端请求身份认证
// 403：客户端请求被拒绝，权限问题
// 404：客户端请求资源未找到
// 500：服务器内部错误