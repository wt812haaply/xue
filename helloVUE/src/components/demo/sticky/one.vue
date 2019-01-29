<template>
  <div >
    <!-- <div @demo="getmsg"></div> -->
    
    <!-- <div class="demoItem"></div> -->

    <!-- <div class="auto_fixed" :class="auto_fixed">自动粘滞固定头部，需要一直展示的</div> -->
    <div class="auto_fixed" :class="auto_fixed">
      <slot name="topTitle"></slot>
    </div>
    <div :style="{display: auto_fixed.fixed ? 'block':'none'}"></div>

   

  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      auto_fixed: {
        fixed: false
      },
    }
  },
  methods: {
    onScroll() {
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      let header_height = null

      if (document.getElementsByClassName('demoItem')[0]) {
        header_height = document.getElementsByClassName('demoItem')[0].offsetHeight
      }
      console.log('滚动的距离:' + scrolled, '头部的高度:' + header_height)
      this.auto_fixed = {
        auto_fixed: true,
        fixed: scrolled >= header_height
      }
    }
   

  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('scroll', this.onScroll)
    })
  },

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {}

.header {
  /* padding: 8px 10px; */
}
.demoItem{
  height: 200px;
}

.auto_fixed {
  height: 3em;
  background: rgba(0, 0, 0, .4);
  line-height: 3em;
  text-align: center;
}

.fixed {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
}



[lang|=en] {
  height: 2000px;
  background-color: #eee;
}

</style>
</code>
