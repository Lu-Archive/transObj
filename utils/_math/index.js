const _log = require('../_log')

class _Math {
    constructor() {
        return '自定义的数学方法'
    }
    // 将参数中非数字类型的去除，整理为一维只包含数字类型的数组
    arrange(){
        let arr = []
        for (let item of [...arguments]) {
            switch (item.constructor.name) {
                case 'String':
                    item = parseInt(item)
                    if (isNaN(item)) {
                        _log.warn('_math.max:含有非数字的参数')
                    } else {
                        arr.push(item)
                    }
                    break
                case 'Array':
                    arr=[...arr,...item]
                    break
                case 'Number':
                    arr.push(item)
                    break
                default:
                     _log.warn('_math.max:含有不可操作参数')
                    break
            }
        }
        // console.log(arr)
        return arr
    }
    // 取最大值
    max() {
        if(arguments.length==0){
            _log.warn('_math.max:没有数字')
            return false
        }else{
            return Math.max(...this.arrange(...arguments))
        }
    }
    // 取最小值
    min(){
        if(arguments.length==0){
            _log.warn('_math.max:没有数字')
            return false
        }else{
            return Math.min(...this.arrange(...arguments))
        }
    }
}
module.exports = new _Math()