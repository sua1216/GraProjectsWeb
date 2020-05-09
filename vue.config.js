const path = require('path')
module.exports = {
	publicPath:process.env.NODE_ENV === 'production'
		? '/dsj_cx_web/'
		: '/',
	assetsDir: './',
    configureWebpack: (config) => {
		if (process.env.NODE_ENV === 'production') {
			// 为生产环境修改配置...
			config.mode = 'production'
		} else {
			// 为开发环境修改配置...
			config.mode = 'development'
		}
		Object.assign(config, {
			// 开发生产共同配置
			resolve: {
				alias: {
					'@': path.resolve(__dirname, './src'),
					'@c': path.resolve(__dirname, './src/components'),
					'@cp':path.resolve(__dirname, './src/components/pages'),
					'@image': path.resolve(__dirname, './src/assets/images')
				} // 别名配置
			}

		})
		//附加配置
	},
	devServer:{
		proxy:{
			'http://sy.bddeve.xbcx.com.cn/dsj_sy_show/api':{
			    target:'http://sy.bddeve.xbcx.com.cn/dsj_sy_show/api',
                changeOrigin: true,
            },
            'http://47.97.11.193:9001/geoserver/www/customresources/sprite':{
			    target:'http://47.97.11.193:9001/geoserver/www/customresources/sprite',
                changeOrigin: true
            },
            'http://47.97.11.193:9001':{
			    target:'http://47.97.11.193:9001',
                changeOrigin:true
            },
            'http://47.97.83.224':{
			    target:'http://47.97.83.224',
                changeOrigin:true
            },
            'http://t1.tianditu.gov.cn/DataServer':{
			    target:'http://t1.tianditu.gov.cn/DataServer',
                changeOrigin:true
            }
		}
	}
}