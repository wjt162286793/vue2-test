const express = require('express')

const app1 = express()
app1.get('/login', (req, res) => {
    switch (req.query.user) {
        case 'admin':  //管理员
            res.send({
                userName: 'admin',
                token: 'admin_token'
            })
            break
        case 'common':  //普通
            res.send({
                userName: 'common',
                token: 'common_token'
            })
            break
        case 'temporary':  //临时
            res.send({
                userName: 'temporary',
                token: 'temporary_token'
            })
            break
    }

})

//开启3001接口的服务
app1.listen(3001)