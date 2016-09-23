<template>
  <div id="app" class="app">
    <ul class="app-ul">
      <li class="app-one"><a v-link="{ path: '/hello' }">About</a></li>
      <li class="app-one"><a v-link="{ path: '/one' }">技能</a></li>
      <li><img src="./assets/aa_03.png" alt="" class="app-pic"></li>
      <li class="app-one"><a v-link="{ path: '/two' }">详情</a></li>
      <li class="app-one"><a v-link="{ path: '/three' }">联系</a></li>
    </ul>
  </div>
  <div class="app-box">
    <p class="app-font">Hello，My name is <span>王锐</span></p>
    <p class="app-font">This is My <span>PERSONAL RESUME</span></p>
    <p class="app-font">想了解本人更多信息请点击导航 ^_^</p>
  </div>
</template>

<script>

import Hello from './components/Hello'
// import One from './components/One'

export default {
  components: {
    Hello
  }
}
</script>

<style>
body {
  /*display: flex;*/
  align-items: center;
  justify-content: center;
  height: 100%;
  background: rgba(0,0,0,0.7);
}
* ul li {
   list-style: none;
}
* a {
  text-decoration: none;
}
.app {
  width: 100%;
  background: #222;
}

.app-ul {
  width: 48%;
  height: 80px;
  margin: 0 auto;
  text-align: center;
}
.app-ul li {
  float: left;
  width: 180px;
  height: 80px;
  line-height: 80px;
  margin-right: 2px;
}
.app-ul li:hover a {
  background: rgba(23,123,201,0.5);
  color: #fff;
}
.app-ul .app-one a {
  display: block;
  text-decoration: none;
  font-size: 28px;
  color: #d0d0d0;
  font-style: oblique;
  font-weight: 700;
}
.app-pic{
  display: block;
  width: 120px;
  height: 180px;
  border: none;
  border-radius: 50%;
  float: left;
  margin: 30px auto 0 30px;
  animation: one 3s linear infinite alternate;
}
@keyframes one {
  to {
    transform: rotateY(180deg);
  }
}

.app-box {
  clear: both;
  width: 500px;
  margin: 300px auto;
  text-align: center;
}
@keyframes app-box {
  from, 20%, 53%, 80%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    -webkit-transform: translate3d(0, -60px, 0);
    transform: translate3d(0, -60px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    -webkit-transform: translate3d(0, -55px, 0);
    transform: translate3d(0, -55px, 0);
  }

  90% {
    -webkit-transform: translate3d(0,-12px,0);
    transform: translate3d(0,-12px,0);
  }
}
.app-font {
  font-size: 28px;
  color: aqua;
  font-style: italic;
   animation: app-box 2s;
}
.app-font span {
  color: red;
  font-size: 32px;
  font-weight: 900;
  text-shadow: 2px 2px 3px #fff;
  animation: app-font 6s infinite alternate;
}
@keyframes app-font {
  from, 50%, to {
    opacity: 0.9;
  }

  25%, 75% {
    opacity: 0;
  }
}
</style>
