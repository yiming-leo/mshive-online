//通用时间转换器YYYY-MM-DD HH:mm:ss
export function getCurrentDateTime() {
    var now = new Date();

    var year = now.getFullYear();
    var month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    var day = String(now.getDate()).padStart(2, '0');
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');

    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}

//通用时间计数器
export function measureExecutionTime(func) {
    var start = new Date().getTime(); // 获取当前时间
    func(); // 执行函数
    var end = new Date().getTime(); // 获取函数执行后的时间
    return end - start // 计算差值
}
