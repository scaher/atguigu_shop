<template>
  <div>
    <!-- 这里注意非路由组件哟版使用标签形式引入， -->
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 发送请求，获取数据
    // 因为这里获取的三级分类数据不变，所以最好在app组件中获取这个数据，能够只发送一次请求，减轻网络负担
    this.$store.dispatch("categoryList")
  },
};
</script>

<style>
</style>

