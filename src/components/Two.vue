<template>
  	<div class="two">
  		<div class="box one">
			<img src="../assets/a1_03.jpg" alt="" />
			<ul class="cover caption">
			<h3>工作经历</h3>
				<li v-for="todo in todoa">{{ todo.text }}</li>
			</ul>
		</div>

		<div class="box two">
			<img src="../assets/a1_05.jpg" alt="" />
			<ul class="cover caption">
			<h3>School</h3>
				<li v-for="todo in todob">{{ todo.text }}</li>
			</ul>
		</div>

		<div class="box three">
			<img src="../assets/a1_10.jpg" alt="" />
			<ul class="cover caption">
			<h3>工作意向</h3>
				<li v-for="todo in todoc">{{ todo.text }}</li>
			</ul>
		</div>
		<a v-link="{ path: '/' }" class="two-btn1">返回首页</a>
		<a v-link="{ path: '/three' }" class="two-btn2">Next</a>
  	</div>
</template>

<script>

export default {
    data () {
      	return {
	        todoa: [
	        	{ text: '厨师'},
	        	{ text: '工作时间：2008/8--2015/12'},
	        	{ text: '企业：西郊壹号'},
	        	{ text: '...........................'},
	        	{ text: '前端工程师'},
	        	{ text: '工作时间：2016/3--2016/7' },
	        	{ text: '企业：亮金信息科技有限公司' },
	        	{ text: '职位：web前端开发工程师' },
	        	{ text: '工作描述：负责编写项目分配的网站前端代码' },
	        	{ text: '职位月薪：无' }
	        ],
	        todob: [
	        	{ text: '毕业时间：2005/9--2008/7' },
	        	{ text: '毕业院校：罗田一中(高中)' },
	        	{ text: '毕业院校：西安交通大学(自读、英语)' }
	        ],
	        todoc: [
	        	{ text: '职业：web前端开发工程师' },
	        	{ text: '工作地点：上海' },
	        	{ text: '期望月薪：面议' }
	        ]
      	}
    }
}
</script>
<style scoped>
	.two {
		width: 1430px;
		border-top: 3px solid red;
		margin: 230px auto;
		text-align: center;
	}
	.box {
		width: 450px;
		height: 360px;
		margin:10px;
		float: left;
		background: #d0d0d0;
		position: relative;
		border:2px solid #222;
		overflow: hidden;
	}
	img {
		width: 450px;
		height: 360px;
	}
	.box img {
		position: absolute;
		top: 0;
		left: 0;
		border: none;
	}
	h3{
		margin:10px 10px 0 10px;
		color: #fff;
		font:18pt Arial, sans-serif;
		letter-spacing: -1px;
		font-weight: bold;
		margin-bottom: 20px;
	}
	ul li {
		font-size: 18px;
		padding-right: 10px;
		color: aqua;
	}
	.caption{
		float: left;
		background: #000;
		height: 300px;
		width: 100%;
		opacity: 0.6;
		position: absolute;
	}

	.one .caption{
		top:290px;
		left:0;
	}
	.two .caption{
		top:290px;
		left:0;
	}
	.three .caption {
		top:290px;
		left:0;
	}

	.two-btn1,.two-btn2 {
	  clear: both;
	  width: 60px;
	  height: 30px;
	  line-height: 30px;
	  text-align: center;
	  border-radius: 3px;
	  display: inline-block;
	  background: red;
	  color: #fff;
	  font-size: 14px;
	  margin: 50px auto;
	  margin-right: 20px;
	}
	.two-btn1 {
		animation: two-btn1 2s infinite alternate;
	}
	@keyframes two-btn1 {
	  from {
	    opacity: 0;
	    -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
	    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
	    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
	    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
	  }

	  60% {
	    opacity: 1;
	    -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
	    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
	    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
	    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
	  }
	}

	
	.two-btn2 {
		animation: two-btn2 2s;
	}
	@keyframes two-btn2 {
	  from, 60%, 75%, 90%, to {
	    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
	    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
	  }

	  from {
	    opacity: 0;
	    -webkit-transform: translate3d(0, 3000px, 0);
	    transform: translate3d(0, 3000px, 0);
	  }

	  60% {
	    opacity: 1;
	    -webkit-transform: translate3d(0, -20px, 0);
	    transform: translate3d(0, -20px, 0);
	  }

	  75% {
	    -webkit-transform: translate3d(0, 10px, 0);
	    transform: translate3d(0, 10px, 0);
	  }

	  90% {
	    -webkit-transform: translate3d(0, -5px, 0);
	    transform: translate3d(0, -5px, 0);
	  }

	  to {
	    -webkit-transform: translate3d(0, 0, 0);
	    transform: translate3d(0, 0, 0);
	  }
	}	


</style>
