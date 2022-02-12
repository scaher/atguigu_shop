<template>
    <!-- <div>home</div> -->
    <div>
        <!-- <div>
            <button>+1</button>
            <span>{{}}</span>
            <button>-1</button>
        </div> -->
        <!-- 全局组件TypeNav已被注册，可直接使用 -->
        <TypeNav></TypeNav>
        <ListContainer/>
        <TodayRecommend/>
        <Rank/>
        <Like/>
        <Floor/>
        <floor/>
        <Brand/>
    </div>
    

</template>

<script>
// 引入其余组件，以便使用(不是全局组件)
import ListContainer from './HomeComponents/ListContainer/index'
import TodayRecommend from './HomeComponents/TodayRecommend/index.vue'
import Rank from './HomeComponents/Rank/index.vue'
import Like from './HomeComponents/Like/index.vue'
import Floor from './HomeComponents/Floor/index.vue'
import Brand from './HomeComponents/Brand/index.vue'
export default {
    name:'',
    // 把将要引入的组件声明以下
    components:{
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brand
    }
}
</script>

<style>

</style>