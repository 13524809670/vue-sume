var Vue = require('vue');
var VueRouter = require('vue-router');
var Hello = require('./components/Hello.vue');
var One = require('./components/One.vue');
var Two = require('./components/Two.vue');
var Three = require('./components/Three.vue');
var AppIndex = require('./App.vue');



Vue.use(VueRouter)

// var Foo = Vue.extend({
// 	template: '<p>这是一个连接！</p>'
// })


var App = Vue.extend({})
var router = new VueRouter()


router.map({
	// '/foo': {
	// 	component: Foo
	// },
	'/': {
		component: AppIndex
	},
	'/hello': {
        component: Hello
    },
	'/one': {
	 	component: One
	},
	'/two': {
		component: Two
	},
	'/three': {
		component: Three
	},
	// '/': {
	// 	component: function (AppIndex) {
	// 		require(['./App.vue'], AppIndex)
	// 	}
	// },
})

router.start(App, '#app')
//启动应用.路由器会创建一个App实例，并且挂载到选择符#app匹配的元素上





// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import App from './App'

// /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

// Vue.use(VueRouter)
// const router = new VueRouter()

// router.map({
// 	'/': {
// 		name: 'home',
// 		components: user
// 	},
// 	'/user': {
// 		name: 'user',
// 		components: user
// 	},
// 	'/user/edit/:id': {
// 		name: 'user-v',
// 		components: user-v
// 	}
// })
// export default router;
