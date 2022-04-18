<!--
  功能：功能描述
  作者：fyj
  邮箱：1981820505@qq.com
  时间：2022年04月14日 15:02:56
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
     <div class="footer">
            <div class="footer-container">
                <div class="footerList">
                    <div class="footerItem">
                        <h4>购物指南</h4>
                        <ul class="footerItemCon">
                            <li>购物流程</li>
                            <li>会员介绍</li>
                            <li>生活旅行/团购</li>
                            <li>常见问题</li>
                            <li>购物指南</li>
                        </ul>

                    </div>
                    <div class="footerItem">
                        <h4>配送方式</h4>
                        <ul class="footerItemCon">
                            <li>上门自提</li>
                            <li>211限时达</li>
                            <li>配送服务查询</li>
                            <li>配送费收取标准</li>
                            <li>海外配送</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>支付方式</h4>
                        <ul class="footerItemCon">
                            <li>货到付款</li>
                            <li>在线支付</li>
                            <li>分期付款</li>
                            <li>邮局汇款</li>
                            <li>公司转账</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>售后服务</h4>
                        <ul class="footerItemCon">
                            <li>售后政策</li>
                            <li>价格保护</li>
                            <li>退款说明</li>
                            <li>返修/退换货</li>
                            <li>取消订单</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>特色服务</h4>
                        <ul class="footerItemCon">
                            <li>夺宝岛</li>
                            <li>DIY装机</li>
                            <li>延保服务</li>
                            <li>尚品汇E卡</li>
                            <li>尚品汇通信</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>帮助中心</h4>
                        <img src="./images/wx_cz.jpg">
                    </div>
                </div>
                <div class="copyright">
                    <ul class="helpLink">
                        <li>关于我们
                            <span class="space"></span>
                        </li>
                        <li>联系我们
                            <span class="space"></span>
                        </li>
                        <li>关于我们
                            <span class="space"></span>
                        </li>
                        <li>商家入驻
                            <span class="space"></span>
                        </li>
                        <li>营销中心
                            <span class="space"></span>
                        </li>
                        <li>友情链接
                            <span class="space"></span>
                        </li>
                        <li>关于我们
                            <span class="space"></span>
                        </li>
                        <li>营销中心
                            <span class="space"></span>
                        </li>
                        <li>友情链接
                            <span class="space"></span>
                        </li>
                        <li>关于我们</li>
                    </ul>
                    <p>地址：北京市昌平区宏福科技园综合楼6层</p>
                    <p>京ICP备19006430号</p>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  // 组件名称
  name: '',
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data () {
    return {}
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
  // 以下是生命周期钩子   注：没用到的钩子请自行删除
  /**
  * 在实例初始化之后，组件属性计算之前，如data属性等
  */
  beforeCreate () {
  },
  /**
  * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
  */
  created () {
  },
  /**
  * 在挂载开始之前被调用：相关的 render 函数首次被调用。
  */
  beforeMount () {
  },
  /**
  * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
  * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
  */
  mounted () {
  },
  /**
  * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
  * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
  */
  beforeUpdate () {
  },
  /**
  * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
  * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
  */
  updated () {
  },
  /**
  * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
  */
  activated () {
  },
  /**
  * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
  */
  deactivated () {
  },
  /**
  * 实例销毁之前调用。在这一步，实例仍然完全可用。
  */
  beforeDestroy () {
  },
  /**
  * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
  * 所有的事件监听器会被移除，所有的子实例也会被销毁。
  */
  destroyed () {
  }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style lang="less" scoped >
      .footer {
        background-color: #eaeaea;

        .footer-container {
            width: 1200px;
            margin: 0 auto;
            padding: 0 15px;

            .footerList {
                padding: 20px;
                border-bottom: 1px solid #e4e1e1;
                border-top: 1px solid #e4e1e1;
                overflow: hidden;
                padding-left: 40px;

                .footerItem {
                    width: 16.6666667%;
                    float: left;

                    h4 {
                        font-size: 14px;
                    }

                    .footerItemCon {
                        li {
                            line-height: 18px;
                        }
                    }

                    &:last-child img {
                        width: 121px;
                    }
                }
            }

            .copyright {
                padding: 20px;

                .helpLink {
                    text-align: center;

                    li {
                        display: inline;

                        .space {
                            border-left: 1px solid #666;
                            width: 1px;
                            height: 13px;
                            background: #666;
                            margin: 8px 10px;
                        }
                    }
                }

                p {
                    margin: 10px 0;
                    text-align: center;
                }
            }
        }
    }
</style>
