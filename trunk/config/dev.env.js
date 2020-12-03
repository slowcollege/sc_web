'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
    // BASE_URL: '"http://182.92.173.111:3589/api/v1/"', // 新增 DEV
    BASE_URL: '"https://www.61huoban.com/api/v1/"', // 新增 DEV
    // BASE_URL: '"http://localhost:3589/api/v1/"', // 新增 DEV
})
