<!-- 模板展示 -->
<template>
	<div>

		<div ref="oneref" class="one">
			
			one -- {{ cont.msg }}
			<hr>
			<br>
			<button @click="oneclick">按钮</button>
				
		</div>


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
	props:['cont'],

	// 事件方法
	methods: {
		oneclick(event,ref){
			this.$emit('one',this.onemsg,this.$refs.oneref.className)
		},
	},

	// 计算属性
	computed: {

	},

	// 侦听属性
	watch:{

	},

	
	mounted(){
		this.oneclick()
	},

	// 接口数据
	created(){

	},
}
</script>


<!-- 样式处理 -->
<style scoped lang='less'>
	.one{
		border: 5px red solid;
		width: 100%;
		height: 200px;
		font-size: 14px;
	}
</style>