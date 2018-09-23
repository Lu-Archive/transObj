```js
npm install transobj
```

#### demo
```js
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
```

#### 可以根据将对象的结构轻松改变为你想要的结构，当然会有损耗性能，若对性能有极致的要求，不建议使用本方法（It is possible to easily change the structure of the object to the structure you want, and of course there will be lossy performance. If the performance is extremely demanding, this method is not recommended）。

#### 只需要设置两次结构，即可轻松得到结果。同时也可让数据结构在代码中轻松可见（You only need to set up the structure twice to get the results easily. It also makes the data structure easy to see in the code.）。

- 这是原对象（This is the original object）。
```js
const transObj=require('transobj')

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
```
- 第一步：先建立需要用到的数据结构，这样先检索得以优化性能，若key值重名了，则可将key值改写为'aa|1'（The first step: first establish the data structure that needs to be used, so that the first retrieval can optimize the performance. If the key value is the same, the key value can be rewritten as 'aa|1'）。
```js
{
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
}
```
- 第二步：建立想要得到的结果的数据结构，在值中设定源数据中对应的key值即可（Step 2: Establish the data structure of the desired result, and set the corresponding key value in the source data in the value）。
```js
{
    xx: {
        aaa: 'aa|1',
        bbb:'dd'
    },
    nn: {
        yy: [{
            uuu: 'bb',
            yyy: 'aaa'
        }]
    }
}
```
- Here we go！这就是结果（This is the result）。
```js
{
    "xx": {
        "aaa": "555",
        "bbb": {
            "aa": "555",
            "ddd": {
                "eee": "666"
            }
        }
    },
    "nn": {
        "yy": [{
            "uuu": "12",
            "yyy": "999"
        }, {
            "uuu": "123",
            "yyy": "1234"
        }, {
            "uuu": "888",
            "yyy": null
        }]
    }
}
```

- 代码上只需要如下操作（Only the following operations are required on the code）。
```js
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
```

- 注意：暂不支持二维数组及以上的数据操作（Note: Data operations for 2D arrays and above are not supported at this time）。

