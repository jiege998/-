<!--
  功能：功能描述
  作者：fyj
  邮箱：1981820505@qq.com
  时间：2022年04月25日 15:21:22
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
    <div class="order-right">
          <div class="order-content">
            <div class="title">
              <h3>我的订单</h3>
            </div>
            <div class="chosetype">
              <table>
                <thead>
                  <tr>
                    <th width="29%">商品</th>
                    <th width="31%">订单详情</th>
                    <th width="13%">收货人</th>
                    <th>金额</th>
                    <th>状态</th>
                    <th>操作</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="orders">

              <table class="order-item" v-for="order in myOrder.records" :key="order.id">
                <thead>
                  <tr>
                    <th colspan="5">
                      <span class="ordertitle">{{order.createTime}}　订单编号：{{order.outTradeNo}} <span
                          class="pull-right delete"><img src="../images/delete.png"></span></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(orderItem,index) in order.orderDetailList" :key="orderItem.id">
                    <td width="60%">
                      <div class="typographic" >
                        <img :src="orderItem.imgUrl" style="width:100px;height:100px">
                        <a href="#" class="block-text">{{orderItem.skuName}}</a>
                        <span>x{{orderItem.skuNum}}</span>
                        <a href="#" class="service">售后申请</a>
                      </div>
                    </td>
                    <td :rowspan="order.orderDetailList.length" v-show="index==0" width="8%" class="center">{{order.consignee}}</td>
                    <td :rowspan="order.orderDetailList.length" v-show="index==0" width="13%" class="center">
                      <ul class="unstyled">
                        <li>总金额¥{{order.totalAmount}}.00</li>
                        <li>在线支付</li>

                      </ul>
                    </td>
                    <td :rowspan="order.orderDetailList.length" width="8%" v-show="index==0" class="center">
                      <a href="#" class="btn">{{order.orderStatusName}} </a>
                    </td>
                    <td :rowspan="order.orderDetailList.length" width="13%" v-show="index==0" class="center">
                      <ul class="unstyled">
                        <li>
                          <a href="mycomment.html" target="_blank">评价|晒单</a>
                        </li>

                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="choose-order">
              <Pagination :pageNo="page" :pageSize="limit" :total='myOrder.total' :continues="5" @getPageNo="getPageNo"></Pagination>
            </div>
          </div>
          <!--猜你喜欢-->
          <div class="like">
            <h4 class="kt">猜你喜欢</h4>
            <ul class="like-list">
              <li class="likeItem">
                <div class="p-img">
                  <img src="../images/itemlike01.png" />
                </div>
                <div class="attr">
                  <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                </div>
                <div class="price">
                  <em>¥</em>
                  <i>3699.00</i>
                </div>
                <div class="commit">已有6人评价
                </div>
              </li>
              <li class="likeItem">
                <div class="p-img">
                  <img src="../images/itemlike02.png" />
                </div>
                <div class="attr">
                  Apple苹果iPhone 6s/6s Plus 16G 64G 128G
                </div>
                <div class="price">
                  <em>¥</em>
                  <i>4388.00</i>
                </div>
                <div class="commit">已有700人评价
                </div>
              </li>
              <li class="likeItem">
                <div class="p-img">
                  <img src="../images/itemlike03.png" />
                </div>
                <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本
                </div>
                <div class="price">
                  <em>¥</em>
                  <i>4088.00</i>
                </div>
                <div class="commit">已有700人评价
                </div>
              </li>
              <li class="likeItem">
                <div class="p-img">
                  <img src="../images/itemlike04.png" />
                </div>
                <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本
                </div>
                <div class="price">
                  <em>¥</em>
                  <i>4088.00</i>
                </div>
                <div class="commit">已有700人评价
                </div>
              </li>
            </ul>
          </div>
        </div>
</template>

<script>
export default {
    name: '',
    data() {
      return {
        //当前第几页
        page:1,
        //每页显示的数量
        limit:3,
        myOrder:{}
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
     async getData(){
      const {page,limit} = this
      let result = await  this.$API.reqMyOrderList(page,limit)
      if(result.code == 200){
        this.myOrder= result.data
      }
      },
      getPageNo(page){
          this.page= page
          this.getData()
      }
    },
  }
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>

</style>
