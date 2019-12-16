import ajax from "./ajax";

/*
  包含n个接口函数的模块
*/
//根据经纬度获取位置信息
export const reqAddress = (geohash) =>ajax(`/position/${geohash}`)
//获取食品分类列表
export const reqFoodType = () =>ajax('/index_category')
//根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) =>ajax('/shops',{longitude,latitude})
//根据经纬度和关键词搜索商铺列表
export const reqAddress = () =>ajax()
//获取一次性验证码
export const reqAddress = () =>ajax()
//用户名密码登录
//发送短信验证码
//手机号验证码登陆
//根据会话获取用户信息
//用户登陆