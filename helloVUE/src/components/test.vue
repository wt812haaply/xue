<!-- 模板展示 -->
<template>
  <div>
    sdsd
    <ul>
        <router-link
          :to="{path: item.url + item.tag}"
          tag="li"
          v-for="(item,index) in testList"
          :key="item.id"
          >
          {{ item.name}}
      </router-link>
    </ul>
  </div>
</template>
<!-- 逻辑处理 -->
<script>
import {baiduApi} from '@/api/baidu'
export default{
  name:'test',
  data () {
    return{
      testList:[
      {
        id:'001',
        url:'/component/demo/accordion/',
        name:'手风琴',
        tag:'demo'
      },
      {
        id: '002',
        url: 'component/demo/sticky/',
        name: '吸顶',
        tag: 'demo'
      },
      {
        id: '003',
        url: 'component/demo/value/',
        name: '传值',
        tag: 'demo'
      },
      {
        id: '004',
        url: '/component/demo/bus/',
        name: 'bus应用',
        tag: 'demo'
      },
      {
        id: '005',
        url: '/component/demo/sticky/',
        name: 'hhaha',
        tag: 'hh'
      },
      {
        id: '006',
        url: '/component/demo/scroller/',
        name: '下拉刷新',
        tag: 'demo'
      }
      ]
    }
  },
  methods:{
    baidu(){
      baiduApi().then((res) =>{
        console.log(res)
      })
    }
  },
  created(){
    this.baidu()
  }
}

</script>
<!-- 样式处理 -->
<style scoped lang='less'>


</style>
