// 日志错误信息
class _log {
    isChrome() {
        try{
            if (navigator.userAgent.indexOf('Chrome') != -1) {
                return true;
            } else {
                return false;
            }
        }catch(err){
            return false;
        }
    }
    isString(str) {
        return (typeof str == 'string') && str.constructor == String;
    }
    isConsole(str) {
        if (this.isChrome() && this.isString(str)) {
            return true;
        } else {
            console.log(str)
            return false;
        }
    }
    error(str) {
        console.log(this.isConsole(str))
        if (this.isConsole(str)) {
            console.log(`%c ${str}`, 'color:#ff0000')
        }
    }
    info(str) {
        if (this.isConsole(str)) {
            console.log(`%c ${str}`, 'color:#ff0000')
        }
    }
    warn(str) {
        if (this.isConsole(str)) {
            console.log(`%c ${str}`, 'color:#ff0000')
        }
    }
}

module.exports=new _log()
