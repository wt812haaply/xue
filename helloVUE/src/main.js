// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// title
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)

//axios
// import axios from 'axios'
import VueAxios from 'vue-axios'

import axios from './api/http'
Vue.use(VueAxios,axios)

// Vue组件的延迟渲染
import LazyRender from 'vue-lazy-render'
Vue.use(LazyRender)

// 图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    error:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532507669300&di=f094f0ca1009979be5fbcebaaa065adb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb3b7d0a20cf431adebe131044036acaf2edd98df.jpg',
    loading:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2852462903,3649011419&fm=27&gp=0.jpg'
})

// 吸顶

Vue.config.productionTip = false


// scroller
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

// bus
Vue.prototype.bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
