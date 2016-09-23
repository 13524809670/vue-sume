<template>
  <div class="wrap-one">
    <div class="pic-one">
      <ul class="pte">
        <li class="one"><a href="#"><img src="../assets/3a.jpg" alt="" target="_blank"></a></li>
        <li class="one"><a href="#"><img src="../assets/5_02.jpg" alt="" target="_blank"></a></li>
        <li class="one"><a href="#"><img src="../assets/8.jpg" alt="" target="_blank"></a></li>
        <li class="one"><a href="#"><img src="../assets/a2.jpg" alt="" target="_blank"></a></li>
        <li class="one"><a href="#"><img src="../assets/b0.jpg" alt="" target="_blank"></a></li>
        <li class="one"><a href="#"><img src="../assets/cd.jpg" alt="" target="_blank"></a></li>
        <li class="one"><a href="#"><img src="../assets/e4.jpg" alt="" target="_blank"></a></li>
        <li class="one"><a href="#"><img src="../assets/1.jpg" alt="" target="_blank"></a></li>
        <li class="one"><a href="#"><img src="../assets/p.jpg" alt="" target="_blank"></a></li>
      </ul>
      <div class="btn-a">
        <ul class="con-a">
          <li class="two">1</li>
          <li class="two">2</li>
          <li class="two">3</li>
          <li class="two">4</li>
          <li class="two">5</li>
          <li class="two">6</li>
          <li class="two">7</li>
          <li class="two">8</li>
          <li class="two">9</li>
        </ul>
        <div class="icon">
          <a id="fl"href="javascript:;;"><</a>
          <a id="fr"href="javascript:;;">></a>
        </div>
      </div>
    </div>
    <ul class="ul-two">
      <h1>{{ msg }}</h1>
      <li>
        <p>html+css</p>
        <p>熟悉W3C标准，熟练使用html和CSS制作符合标准的Web页面。了解CSS3和H5的新特性。</p>
      </li>
      <li>
        <p>Javascript</p>
        <p>熟悉原生javascript和jquery基本运用。</p>
      </li>
      <li>
        <p>VueJS</p>
        <p>熟悉vuejs，能够使用vue 编写单页面应用。</p>
      </li>
      <li>
        <p>Gulp</p>
        <p>能熟练的使用gulp构建网站页面</p>
      </li>
      <li>
        <p>Bootstrap</p>
        <p>了解基本框架，熟悉运用。</p>
      </li>
      <li>
        <p>Photoshop</p>
        <p>了解工具，熟悉运用</p>
      </li>
    </ul>
    <a v-link="{ path: '/' }" class="one-btn1">返回首页</a>
    <a v-link="{ path: '/two' }" class="one-btn2">Next</a>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '前端技能'
    }
  }
}
</script>
<style scoped>
* ul{list-style:none}
* a{text-decoration:none}
.wrap-one {
  width: 1500px;
  margin: 100px auto;
  border-top: 3px solid red;
 /* text-align: center;*/
}

/*图片定位*/
.pic-one {
  display: inline-block;
  float: left;
  position: relative;
  margin-top: 23px;
}
.pic-one,.one img {
  width: 400px;
  height: 700px;
}
.pic-one .one {
  position: absolute;
  top: 0;
  left: 0;
}
.one img {
  border: none;
}
/*图片定位*/

/*技能表*/
.ul-two {
  list-style: none;
  width: 1050px;
  float: right;
  background:#d09;
  display: inline-block;
  padding-bottom: 10px;
}

h1 {
  font-size: 30px;
  color: #fff;
}
p {
  color: #fff;
}

.ul-two li {
  transform: translate(210px,0px);
  transition: all 0.5s;
  opacity: 0;
}
/*动画执行时的样式*/
.ul-two:hover li{
  transform: translate(0px,0px);
  opacity: 1;
}
/*动画依次延时*/
.ul-two li:nth-of-type(1) {
  transition-delay: 0.05s;
}
.ul-two li:nth-of-type(2) {
  transition-delay: 0.1s;
}
.ul-two li:nth-of-type(3) {
  transition-delay: 0.15s;
}
.ul-two li:nth-of-type(4) {
  transition-delay: 0.2s;
}
.ul-two li:nth-of-type(5) {
  transition-delay: 0.25s;
}
.ul-two li:nth-of-type(6) {
  transition-delay: 0.25s;
}
.ul-two li:nth-of-type(7) {
  transition-delay: 0.25s;
}
/*技能表*/

.one-btn1,.one-btn2 {
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
    margin: 30px auto;
   /* margin-right: 20px;*/
    animation: one-btn 2s infinite alternate;
  }
  .one-btn1 {
    margin-left: 700px;
  }
/*.one-btn {
  clear: both;
  width: 60px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 3px;
  display: block;
  background: red;
  color: #fff;
  font-size: 14px;
  margin: 30px auto;
  animation: one-btn 2s infinite alternate;
}*/
@keyframes one-btn {
  from, 20%, 40%, 60%, 80%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(.9, .9, .9);
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(.97, .97, .97);
    transform: scale3d(.97, .97, .97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

</style>
