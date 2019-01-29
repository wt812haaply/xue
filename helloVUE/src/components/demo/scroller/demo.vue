<!-- 模板展示 -->
<template>
	<div>
		




<scroller :on-refresh="refresh"
            :on-infinite="infinite"
            style="padding-top: 44px;">


    <div v-for="(item, index) in items" class="row" :class="{'grey-bg': index % 2 == 0}">
      {{ item }}
    </div>



  </scroller>







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
			 items: []
		}
	},

	// 组件
	components:{

	},

	// 组件传值
	props:[],

	// 事件方法
	

	// 计算属性
	computed: {

	},

	// 侦听属性
	watch:{

	},

	methods: {
    refresh: function (done) {
      var self = this
      setTimeout(function () {
        var start = self.top - 1
        for (var i = start; i > start - 10; i--) {
          self.items.splice(0, 0, i + ' - keep walking, be 2 with you.');
        }
        self.top = self.top - 10;
        done();
      }, 1500)
    },

    infinite: function (done) {
      var self = this
      setTimeout(function () {
        var start = self.bottom + 1;
        for (var i = start; i < start + 10; i++) {
          self.items.push(i + ' - keep walking, be 2 with you.');
        }
        self.bottom = self.bottom + 10;
        done();
      }, 1500)
    }
  },
	//一进页面先执行
	mounted: function () {
    for (var i = 1; i <= 20; i++) {
      this.items.push(i + ' - keep walking, be 2 with you.');
    }
    this.top = 1;
    this.bottom = 20;
  },

	// 接口数据
	created(){

	},
}
</script>


<!-- 样式处理 -->
<style scoped lang='less'>
	html, body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

.row {
  width: 100%;
  height: 50px;
  padding: 10px 0;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #444;
  background-color: #fff;
}

.grey-bg {
  background-color: #eee;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 44px;
  width: 100%;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
  background-color: #fff;
  z-index: 1000;
  color: #666;
}

.header > .title {
  font-size: 16px;
  line-height: 44px;
  text-align: center;
  margin: 0 auto;
}
/deep/._v-container>._v-content>.pull-to-refresh-layer{
	margin-top: -104px;
}
</style>