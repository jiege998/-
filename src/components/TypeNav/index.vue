<!--
  功能：功能描述
  作者：fyj
  邮箱：1981820505@qq.com
  时间：2022年04月15日 10:42:24
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="type-nav">
    <div class="container" @mouseleave="leaveIndex" @mouseenter="enterShow">
      <h2 class="all">全部商品分类</h2>
      <transition name="sort"> 
         <div class="sort" v-show="show">
        <div class="all-sort-list2" @click="goSearch">
          <div
            class="item"
            v-for="(c1, index) in categoryList"
            :key="c1.categoryId"
          >
            <h3
              @mouseenter="changeIndex(index)"
              :style="{
                backgroundColor: currentIndex === index ? 'skyblue' : '',
              }"
            >
              <a
                :data-categoryName="c1.categoryName"
                :data-category1Id="c1.categoryId"
                >{{ c1.categoryName }}</a
              >
            </h3>
            <div
              class="item-list clearfix"
              :style="{ display: currentIndex === index ? 'block' : 'none' }"
            >
              <div
                class="subitem"
                v-for="c2 in c1.categoryChild"
                :key="c2.categoryId"
              >
                <dl class="fore">
                  <dt>
                    <a
                      :data-categoryName="c2.categoryName"
                      :data-category2Id="c2.categoryId"
                      >{{ c2.categoryName }}</a
                    >
                  </dt>
                  <dd>
                    <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                      <a
                        :data-categoryName="c3.categoryName"
                        :data-category3Id="c3.categoryId"
                        >{{ c3.categoryName }}</a
                      >
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      </transition>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
     
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
  // 组件名称
  name: "TypeNav",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      currentIndex: -1,
      show: true,
    };
  },
  // 计算属性
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    // changeIndex(index){
    //   this.currentIndex = index
    // },
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 500),
    leaveIndex() {
      this.currentIndex = -1;
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
    enterShow() {
      this.show = true;
    },
    goSearch(event) {
      let { categoryname, category1id, category2id, category3id } =
        event.target.dataset;
      // console.log(categoryname,category1id,category2id,category3id)
      if (categoryname) {
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        if(this.$route.params){
          location.params = this.$route.params
          location.query = query;
        // console.log(location)
          this.$router.push(location);
        }
        
      }
    },
  },
  // 以下是生命周期钩子   注：没用到的钩子请自行删除
  /**
   * 在实例初始化之后，组件属性计算之前，如data属性等
   */
  beforeCreate() {},
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  /**
   * 在挂载开始之前被调用：相关的 render 函数首次被调用。
   */
  beforeMount() {},
  /**
   * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
   * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
   */
  mounted() {
    if (this.$route.path != "/home") {
      this.show = false;
    }
    // console.log(this)
  },
  /**
   * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
   * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
   */
  beforeUpdate() {},
  /**
   * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
   * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
   */
  updated() {},
  /**
   * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
   */
  activated() {},
  /**
   * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
   */
  deactivated() {},
  /**
   * 实例销毁之前调用。在这一步，实例仍然完全可用。
   */
  beforeDestroy() {},
  /**
   * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
   * 所有的事件监听器会被移除，所有的子实例也会被销毁。
   */
  destroyed() {},
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;


      .all-sort-list2 {
        overflow-y: scroll;
        height: 460px;
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;

            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            overflow-y: scroll;
            display: none;
            position: absolute;
            width: 734px;
            height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;
            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
      }
    }
    .sort-enter{
      height: 0px;
      // transform: rotate(0deg);
    }
    .sort-enter-to{
      height: 461px;
      // transform: rotate(36s0deg);
    }
    .sort-enter-active{
      transition: all .5s linear;
    }
  }
}
</style>
