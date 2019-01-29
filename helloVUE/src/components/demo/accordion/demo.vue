<!-- 模板展示 -->
<template>
  <div>
    <vueaccordion>
            <vueaccordionitem title="first">
              <div>1</div>
            </vueaccordionitem>

            <vueaccordionitem title="first">
              <div>111</div>
            </vueaccordionitem>

            <vueaccordionitem title="first">
              <div>333</div>
            </vueaccordionitem>

            <vueaccordionitem title="first">
              <div>123</div>
            </vueaccordionitem>


            <vueaccordionitem title="second">
              <div>2</div>
            </vueaccordionitem>


            <vueaccordionitem title="third">
              <div>3</div>
              <vueaccordion>
                  <vueaccordionitem title="first">
                    <div>4</div>
                  </vueaccordionitem>
                  <vueaccordionitem title="second">
                    <div>5</div>
                  </vueaccordionitem>
              </vueaccordion>
            </vueaccordionitem>
    </vueaccordion>
  </div>
</template>
<!-- 逻辑处理 -->
<script>
import vueaccordion from './vue-accordion'
import vueaccordionitem from './vue-accordion-item'

export default {
  name: 'demo',
  data() {
    return {

    }
  },

  // 组件
  components: {
    vueaccordion,
    vueaccordionitem
  },

  // 组件传值
  props: [],

  // 事件方法
  methods: {

  },

  // 计算属性
  computed: {

  },

  // 侦听属性
  watch: {

  },


  mounted() {

  },

  // 接口数据
  created() {

  }
}

</script>
<!-- 样式处理 -->
<style scoped lang='less'>


</style>
