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
        <!-- 这里需要将父组件数据传到子组件中 -->
        <Floor v-for="(floor) in floorList" :key="floor.id" :list="floor"/>
        <!-- <floor/> -->
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

// 
import {mapState} from 'vuex'
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
    },
    mounted() {
        // floor组件是v-for遍历生成的，如果在floor组件中发送数据，没有足够的数据去遍历出多个floor组件
        // 所以发请求要在红么组件中发送数据
        this.$store.dispatch("getFloorList")
    },
    computed:{
        ...mapState({
            // 在mounted过程中获取了数据后将数据存入store中，通过mapState获取数据
            // 回调函数返回state中的floorList值，存到floorList中，在经过mapState将函数返回值接收，得到floorList值
            floorList : state => state.home.floorList
        })
    }
}
</script>

<style>

</style>