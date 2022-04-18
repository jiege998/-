//先引入mockjs模块
import Mock from 'mockjs'
//把JSON数据格式引入进来 【JSON数据格式没有对外暴露，但是可以引入，因为webpack默认对外暴露图片、JSON数据格式】
import banner from './banner.json'
import floor from './floor.json'
//mock数据：第一个参数请求地址 第二个参数：请求数据
Mock.mock('/mock/banner',{data:banner,code:200})
Mock.mock('/mock/floor',{data:floor,code:200})