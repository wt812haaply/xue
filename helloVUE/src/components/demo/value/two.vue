<!-- 模板展示 -->
<template>
	<div class="two" ref="tworef" >
		two -->{{cont.msg}}
		<hr>
		<br>
		<button @click="twoclick">按钮</button>
	</div>
</template>

<!-- 逻辑处理 -->
<script>
// 组件 import BScroll from 'better-scroll'
// api import { orderList } from 'api/event'
export default {
	name:'two',
	data () {
		return{
			twomsg:'这是two的信息',
		}
	},

	// 组件
	components:{

	},

	// 组件传值
	props:['cont'],

	// 事件方法
	methods: {
		twoclick(event,ref){
			this.$emit('two',this.twomsg,this.$refs.tworef.className)
		}
	},

	// 计算属性
	computed: {

	},

	// 侦听属性
	watch:{

	},

	
	mounted(){
		this.twoclick()
	},

	// 接口数据
	created(){

	},
}
</script>


<!-- 样式处理 -->
<style scoped lang='less'>
	.two{
		border: blue 5px solid;
		display: block;
		width: 100%;
		height: 200px;
	}
</style>