<!-- 模板展示 -->
<template>
  <div>
    <div class="accordion__item">
      <div 
        class="accordion__trigger"
        :class="{'accordion__trigger_active': visible}"
        @click="open"
        v-html="title">
      </div>
      <transition 
        name="accordion"
        @enter="start"
        @after-enter="end"
        @before-leave="start"
        @after-leave="end">
        <div class="accordion__wrapper" v-show="visible">
          <div class="accordion__content"><slot /></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
export default {
  name:'vueaccordionitem',
  data () {
    return{
      index: null,
    }
  },

  // 组件
  components:{

  },

  // 组件传值
  props: ['title'],
  inject: ['Accordion'],

  // 事件方法
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null
      } else {
        this.Accordion.active = this.index
      }
      console.log(this.visible)
    },
    start(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    end(el) {
      el.style.height = ''
    }
  },

  // 计算属性
   computed: {
    visible() {
      return this.index == this.Accordion.active
    }
  },

  // 侦听属性
  watch:{

  },

  
  mounted(){

  },

  // 接口数据
  created() {
    this.index = this.Accordion.count++
  }
}
</script>


<!-- 样式处理 -->
<style scoped lang='less'>
* {
  box-sizing: border-box;
}

body {
  padding: 50px;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}

.accordion__item:last-child .accordion__content {
  border-bottom: solid 1px #e9e9e9;
}

.accordion__trigger {
  padding: 10px 20px;
  background: green;
  color: #fff;
  cursor: pointer;
}
.accordion__trigger:after{
   content: '-';
}

.accordion__trigger_active {
  background: red;
}

.accordion__trigger_active:after {
  content: '+';
}

.accordion__content {
  padding: 15px 10px;
  border-left: solid 1px #e9e9e9;
  border-right: solid 1px #e9e9e9;
}
</style>