<!-- 模板展示 -->
<template>
	<div>
		one,{{ onemsg }}
	</div>
</template>

<!-- 逻辑处理 -->
<script>
// 组件 import BScroll from 'better-scroll'
// api import { orderList } from 'api/event'
export default {
	name:'',
	data () {
		return{
			onemsg:'我是one的信息',
		}
	},

	// 组件
	components:{

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

	//一进页面先执行
	mounted(){
		let _this = this;
		this.bus.$on("change",function(msg){
			console.log(msg)
			_this.onemsg = msg;
		})
	},

	// 接口数据
	created(){

	},
}
</script>


<!-- 样式处理 -->
<style scoped lang='less'>
	
</style>