<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow">
        <h2 class="all" @mouseenter="enterShow">全部商品分类</h2>
        <transition name="sorts">
          <div class="sort" v-show="show">
            <div
              class="all-sort-list2"
              @mouseleave="returnIndex"
              @click="goSearch"
            >
              <div
                class="item bo"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ cur: currentIndex == index }"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                  <!-- <router-link to="/search">{{c1.categoryName}}</router-link> -->
                </h3>
                <div class="item-list clearfix">
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
      </div>

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
// import { log } from 'console';
import { mapState } from "vuex";
import { throttle } from "lodash";
// import { Console, log } from "console";
export default {
  name: "TypeNav",

  data() {
    return {
      // 鼠标移入事件一级分类
      currentIndex: -1,
      // 控制商品分类显示与隐藏
      show: true,
    };
  },
  // 组件挂载完毕，可以获取服务器数据
  mounted() {
    // 发送请求，获取数据
    // 因为这里获取的三级分类数据不变，所以最好在app组件中获取这个数据，能够只发送一次请求，减轻网络负担
    // this.$store.dispatch("categoryList");
    // 如果路由信息不是/home就隐藏商品分类
    // console.log(this.$route,this.show);
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
  computed: {
    // 从仓库中获取数据，使用mapState从仓库中获取参数并解构
    ...mapState({
      categoryList: (state) => {
        return state.home.categoryList;
      },
    }),
  },
  methods: {
    // changeIndex(index){
    //   // console.log(index)
    //   this.currentIndex = index
    // },
    returnIndex() {
      this.currentIndex = -1;
    },

    // 加上节流,
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 20),
    // 路由跳转，进入搜索页面
    goSearch(event) {
      // console.log(event.target)
      let { categoryname, category1id, category2id, category3id } =
        event.target.dataset;
      if (categoryname) {
        // 路由跳转的公用参数
        let location = { name: "Search" };
        let query = { categoryName: categoryname };

        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else if (category3id) {
          query.category3Id = category3id;
        }
        if(this.$route.params){
          location.params = this.$route.params
        }
        location.query = query;
        // console.log(location)
        this.$router.push(location);
      }
    },
    // 鼠標移入顯示
    enterShow() {
      this.show = true;
    },
    // 鼠標移除顯示
    leaveShow() {
      if (this.$route.path == "/home") return;
      this.show = false;
    },
  },
};
</script>

<style  lang="less" scoped>
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
        .cur {
          background-color: skyblue;
        }
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
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

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
    .sorts-enter{
      height: 0px;

    }
    .sorts-enter-to{
      height: 461px;
    }
    .sorts-enter-active{
      transition: all .3s linear;
    }
  }
}
</style>
