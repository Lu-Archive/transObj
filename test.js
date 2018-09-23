const transObj = require('./index.js')

const Obj = {
    aa: 1,
    bb: ['12', '123', '888'],
    cc: [{
        aaa: '999',
        bbb: {
            ccc: '456'
        }
    }, {
        aaa: '1234',
        bbb: {
            ccc: '4567'
        }
    }],
    dd: {
        aa: '555',
        ddd: {
            eee: '666'
        }
    }
}

let x = transObj(Obj, {
    aa: Number,
    bb: Array,
    cc: [{
        aaa: String,
        bbb: {
            ccc: String
        }
    }],
    dd: {
        'aa|1': String,
        ddd: {
            eee: String
        }
    }
}, {
    xx: {
        aaa: 'aa|1',
        bbb: 'dd'
    },
    nn: {
        yy: [{
            uuu: 'bb',
            yyy: 'aaa'
        }]
    }
})

console.log(JSON.stringify(x))