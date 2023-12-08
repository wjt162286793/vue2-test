const fs = require('fs')
const path = require('path')
console.log('developTest环境配置文件')
let version_info = JSON.stringify({version:"1.1.0",modeName:'developTest'})
fs.writeFile(path.join(__dirname,'./public/version.json'),version_info,function(err){
   if(err){
     return 
   }
})
module.exports = {

    transpileDependencies: true,
    lintOnSave: false,
    devServer:{
      client:{
        overlay:false
      },
      port:8080,
      open:true,
      proxy:{
        '/server1':{
          target:'http://localhost:3001',
          ws:false,
          changeOrigin:true,
          pathRewrite:{
            '^/server1':''
          }
        },
        '/server2':{
          target:'http://localhost:3002',
          ws:false,
          changeOrigin:true,
          pathRewrite:{
            '^/server2':''
          }
        }
      }
    }
  }
