import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/test'
import demoAccordion from '@/components/demo/accordion/demo'
import demoStickey from '@/components/demo/sticky/demo'
import demoStickey1 from '@/components/demo/sticky/hh'
import demoValue from '@/components/demo/value/demo'
import demoBus from '@/components/demo/bus/demo'
import demoScroller from '@/components/demo/scroller/demo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: Test,
      meta: {
      	title: '11'
      }
    },
    {
    	path: '/component/demo/accordion/demo',
    	name: 'demo',
    	component: demoAccordion
    },
    {
    	path: '/component/demo/sticky/demo',
    	name: 'sticky',
    	component: demoStickey
    },
    {
      path: '/component/demo/sticky/hh',
      name: 'hh',
      component: demoStickey1
    },
    {
      path: '/component/demo/value/demo',
      name: 'value',
      component: demoValue
    },
    {
      path: '/component/demo/value/demo',
      name: 'value',
      component: demoBus
    },
    {
      path:'/component/demo/scroller/demo',
      name:'demo',
      component:demoScroller
    }]
})
