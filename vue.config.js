module.exports = {
    // 校验工具的开启关闭
    lintOnSave:false,
    // 代理跨域
    devServer:{
        proxy:{
            '/api':{
                target:'http://39.98.123.211',
                // pathRewrite:{'^/api':''}
            }
        }
    }
}