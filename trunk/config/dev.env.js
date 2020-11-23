'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
    BASE_URL: '"https://jd-test.jia-fu.cn/mall-service-"', // 新增 DEV
})
