<!-- 模板展示 -->
<template>
	<div>
		<button value="按钮" @click="democlick">按钮</button>
		<one></one>
	</div>
</template>

<!-- 逻辑处理 -->
<script>
import one from './one'
// 组件 import BScroll from 'better-scroll'
// api import { orderList } from 'api/event'
export default {
	name:'',
	data () {
		return{
			demomsg:'我是demo的信息',
		}
	},

	// 组件
	components:{
		one
	},

	// 组件传值
	props:[],

	// 事件方法
	methods: {
		democlick(){
			this.bus.$emit("change",this.demomsg)
			console.log(this.demomsg)
		}
	},

	// 计算属性
	computed: {

	},

	// 侦听属性
	watch:{

	},

	//一进页面先执行
	mounted(){
		// this.democlick()
	},

	// 接口数据
	created(){

	},
}
</script>


<!-- 样式处理 -->
<style scoped lang='less'>
	
</style>