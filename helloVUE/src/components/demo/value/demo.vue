<!-- 模板展示 -->
<template>
	<div>
		demo
		<hr>
		接收 one 的信息--->{{ get.one }} {{ get.oneClass }}
		<hr>
		接收 two 的信息--->{{ get.two }} {{ get.twoClass }}
		<br>
		<br>
		<br>
		<one @one="getOne" :cont="demo"></one>	
		<br>
		<two @two="getTwo" :cont="demo"></two>
	</div>
</template>

<!-- 逻辑处理 -->
<script>
// 组件 import BScroll from 'better-scroll'
// api import { orderList } from 'api/event'
import one from './one'
import two from './two'
export default {
	name:'',
	data () {
		return{
			get:{
				one:'',
				oneClass:'',
				two:'',
				twoClass:'',
			},

			demo:{
				msg:'我是demo的信息',
			}
		}
	},

	// 组件
	components:{
		one,
		two
	},

	// 组件传值
	props:[],

	// 事件方法
	methods: {
		

		getOne(data,className){
			console.log(data,className)
			this.get.one = data;
			this.get.oneClass = className;
		},
		getTwo(data,className){
			console.log(data,className)
			this.get.two = data;
			this.get.twoClass= className;
		},

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
	
</style>