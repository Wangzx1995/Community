import Mock from 'mockjs' // 引入mockjs
import loginAPI from './login'
import dataAPI from './data'

//登录
Mock.mock(/\/user\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/user\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)


Mock.mock(/\/data\/list/, 'get', dataAPI.getList)