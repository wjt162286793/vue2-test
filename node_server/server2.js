const express = require('express')

const app2 = express()
app2.get('/getRole', (req, res) => {
    switch (req.query.userType) {
        case 'admin':  //管理人员权限
            res.send([
                'instructions', 'communication', 'life', 'common', 'admin', 'envMode', 'extendAndMixin', 'flowChart'
            ])
            break
        case 'common':  //普通用户权限
            res.send([
                'instructions', 'communication', 'life', 'common', 'envMode', 'extendAndMixin', 'flowChart'
            ])
            break
        case 'temporary':  //临时用户权限
            res.send([
                'instructions', 'communication', 'life', 'envMode', 'extendAndMixin', 'flowChart'
            ])
    }
})

//开启3000接口的服务
app2.listen(3002)