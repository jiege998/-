<!--
  功能：功能描述
  作者：fyj
  邮箱：1981820505@qq.com
  时间：2022年04月15日 11:06:32
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
     <div class="rank">
            <div class="tab">
                <div class="tab-tit clearfix">
                    <a href="javascript:;" class="on">
                        <p class="img">
                            <i></i>
                        </p>
                        <p class="text">热卖排行</p>
                    </a>
                    <a href="javascript:;">
                        <p class="img">
                            <i></i>
                        </p>
                        <p class="text">特价排行</p>
                    </a>
                    <a href="javascript:;">
                        <p class="img">
                            <i></i>
                        </p>
                        <p class="text">新品排行</p>
                    </a>
                </div>

            </div>
            <div class="content">
                <ul>
                    <li>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/1.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                                </div>
                                <p class="info-price">定金：¥100.00</p>
                            </div>
                        </div>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/1.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                                </div>
                                <p class="info-price">定金：¥100.00</p>
                            </div>
                        </div>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/1.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                                </div>
                                <p class="info-price">定金：¥100.00</p>
                            </div>
                        </div>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/1.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                                </div>
                                <p class="info-price">定金：¥100.00</p>
                            </div>
                        </div>
                    </li>
                </ul>
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
<style lang="less" scoped>
     .rank {
        width: 1200px;
        margin: 0 auto;

        .tab {
            margin: 0 auto;
            overflow: hidden;
            width: 312px;

            .tab-tit {
                text-align: center;

                a {
                    display: block;
                    padding: 0 18px;
                    float: left;
                    text-decoration: none;
                    font-size: 16px;
                    color: #999;

                    p {
                        margin: 5px 0;
                    }

                    .img {
                        i {
                            width: 35px;
                            height: 35px;
                            display: block;
                            background: url(./images/bg0.png);
                            margin-left: 10px;
                        }
                    }

                    .text {
                        line-height: 28px;
                    }
                }

                .on {
                    color: #e60012;

                    .img {
                        i {
                            background-position: -35px 0;
                        }
                    }
                }
            }
        }

        .content {
            overflow: hidden;
            padding: 10px;

            ul {
                li {
                    overflow: hidden;
                    list-style: none;
                    line-height: 18px;

                    .img-item {
                        border: 1px solid #e1251b;
                        width: 269px;
                        float: left;
                        overflow: hidden;
                        margin: 0 12px 10px;
                        background: #fff;

                        .tab-pic {
                            width: 230px;
                            height: 210px;
                            overflow: hidden;
                            text-align: center;
                            margin: 5px auto 18px;

                            a {
                                img {
                                    width: 200px;
                                    height: 200px;
                                }
                            }
                        }

                        .tab-info {
                            background: #fafafa;

                            .info-title {
                                height: 50px;
                                line-height: 28px;
                                overflow: hidden;
                                margin: 0 auto;
                                padding-left: 10px;

                                a {
                                    color: #333;
                                    text-decoration: none;
                                }
                            }

                            .info-price {
                                font-size: 20px;
                                color: #e1251b;
                                height: 35px;
                                padding-left: 10px;
                                display: block;
                                line-height: 24px;
                                margin: 10px auto 0;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
