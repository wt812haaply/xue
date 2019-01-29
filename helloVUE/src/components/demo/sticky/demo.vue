<!-- 模板展示 -->
<template>
	<div>
		<div class="demoItem">sdsds</div>
		<one>
			<div slot="topTitle">{{demo.msg}}</div>
		</one>

		 <div class="content">1111</div>
        <div lang="en">111</div>
    </div>
	</div>
</template>

<!-- 逻辑处理 -->
<script>
import one from './one'
// 组件 import BScroll from 'better-scroll'
// api import { orderList } from 'api/event'
export default {
	name:'demo',
	data () {
		return{
			demo:{
				msg:'自动粘滞固定头部'
			}
		}
	},

	// 组件
	components:{
		one,
	},

	// 组件传值
	props:[],

	// 事件方法
	methods: {
	},

	// 计算属性
	computed: {

	},

	// 侦听属性
	watch:{

	},

	
	mounted(){

	},

	// 接口数据
	created(){

	},
}
</script>


<!-- 样式处理 -->
<style scoped lang='less'>
.demoItem{
	width: 100%;
	height: 400px;
	background: #eee;
}

.content {
  color: gray;
  height: 2000px;
  /* padding: 8px; */
}
</style>