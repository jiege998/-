<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="item in cartInfoList" :key="item.id">
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              @click="changeChecked(item, $event)"
              :checked="item.isChecked == 1"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="item.imgUrl" />
            <div class="item-msg">{{ item.skuName }}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ item.cartPrice }}.00</span>
          </li>
          <li class="cart-list-con5">
            <a
              href="javascript:void(0)"
              class="mins"
              @click="handler('mins', -1, item)"
              >-</a
            >
            <input
              autocomplete="off"
              type="text"
              :value="item.skuNum"
              minnum="1"
              class="itxt"
              @change="handler('change', $event.target.value * 1, item)"
            />
            <a
              href="javascript:void(0)"
              class="plus"
              @click="handler('plus', 1, item)"
              >+</a
            >
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ item.skuNum * item.cartPrice }}</span>
          </li>
          <li class="cart-list-con7">
            <a href="#none" class="sindelet" @click="deleteShopCart(item)"
              >删除</a
            >
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool" v-if="cartInfoList">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" :checked="isCheckedAll" @click="checkedAll" />
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="deleteAllChecked">删除选中的商品</a>
        <a>移到我的关注</a>
        <a>清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ checkedSum }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：{{ totalPrice }}</em>
        </div>
        <div class="sumbtn">
          <router-link to="/trade">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "ShopCart",
  mounted() {
    this.getDate();
  },
  computed: {
    ...mapGetters(["cartInfoList"]),
    totalPrice() {
      if (this.cartInfoList) {
        return this.cartInfoList.reduce((pre, obj) => {
          pre = pre + (obj.isChecked == 1 ? obj.skuNum * obj.cartPrice : 0);
          return pre;
        }, 0);
      }
    },
    isCheckedAll() {
      if (this.cartInfoList && this.cartInfoList.length>0) {
        return this.cartInfoList.every((item) => item.isChecked == 1);
      }
    },
    checkedSum() {
      if (this.cartInfoList) {
        return this.cartInfoList.reduce((pre, obj) => {
          pre = pre + (obj.isChecked == 1 ? 1 : 0);
          return pre;
        }, 0);
      }
    },
  },
  methods: {
    getDate() {
      this.$store.dispatch("getCartInfo");
    },
    async deleteShopCart(item) {
      try {
        await this.$store.dispatch("deleteShopCart", item.skuId);
        this.getDate();
      } catch (error) {
        alert(error.message);
      }
    },
    handler: throttle(async function (type, disNum, cart) {
      switch (type) {
        case "plus":
          disNum = 1;
          break;
        case "mins":
          if (cart.skuNum > 1) {
            disNum = -1;
          } else {
            disNum = 0;
          }
          break;
        case "change":
          if (isNaN(disNum) || disNum < 1) {
            disNum = 0;
          } else {
            disNum = parseInt(disNum) - cart.skuNum;
          }

          break;
      }
      try {
        await this.$store.dispatch("addOrUpdateShopCart", {
          skuId: cart.skuId,
          skuNum: disNum,
        });
        this.getDate();
      } catch (error) {}
    }, 1000),
    async changeChecked(cart, event) {
      try {
        let isChecked = event.target.checked ? 1 : 0;
        await this.$store.dispatch("changeIsChecked", {
          skuId: cart.skuId,
          isChecked: isChecked,
        });
        this.getDate();
      } catch (error) {}
    },
    async deleteAllChecked() {
      try {
        await this.$store.dispatch("deleteAllChecked");
        this.getDate();
      } catch (error) {
        alert(error.message);
      }
    },
    async checkedAll(event){
      try {
        await this.$store.dispatch("checkedAll",event.target.checked?"1":"0");
        this.getDate();
      } catch (error) {
        alert(error.message);
      }
    }
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con4 {
          width: 10%;
        }

        .cart-list-con5 {
          width: 17%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 10%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;
        color: #c81623;
        font-size: 16px;
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>