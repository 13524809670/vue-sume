<template>
  <app></app>
  <div class="hello">
    <table cellspacing="20">
      <tr>
        <td>
          <p>Name</p>
          <p>姓名：王锐</p>
        </td>
        <td>
          <p> Gender</p>
          <p>性别：男</p>
        </td>
        <td>
          <p>Age</p>
          <p>年龄：26</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Place of origin</p>
          <p>籍贯：湖北</p>
        </td>
        <td>
          <p>Place of residence</p>
          <p>现居地：上海</p>
        </td>
        <td>
          <p>Tel</p>
          <p>联系电话：13524809670</p>
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <p class="txt">自我评价</p>
          <p class="hello-txt">
          工作认真踏实，具有敬业精神，能吃苦耐劳，团队意识强，对工作认真负责，能够承担一定工作压力，具有挑战能力，有求知欲有解决问题、钻研新技术的兴趣和能力，乐于研究Web前端效果的技巧与实现并且能很快接受和学习新的知识
          </p>
        </td>
      </tr>
    </table>
    <a v-link="{ path: '/' }" class="hello-btn1">返回首页</a>
    <a v-link="{ path: '/one' }" class="hello-btn2">Next</a>
  </div>
</template>

<script>

export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  /*text-align: center;*/
}
table {
  width: 1200px;
  margin: 150px auto 0;
  animation: all 1s;
}
@keyframes all {
  from {
    -webkit-transform: none;
    transform: none;
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

td {
  width: 300px;
  height: 130px;
  background:rgba(94,200,255,0.6);
  border-radius: 20%;
}
table tr td:hover {
  background:rgba(94,200,255,0.9);
}
p {
  color: #fff;
  padding-left: 20px;
}
.txt {
  margin-top: 50px;
}
.hello-txt {
  margin-bottom: 50px;
}
a {
  margin:40px;
}


.hello-btn1,.hello-btn2 {
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
    animation: box 2s infinite alternate;
  }
  .hello-btn1{
    margin-left:46%;
  }
  
@keyframes box {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
    opacity: 0.6;
  }

  50% {
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(.95, .95, .95);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px);
    animation-timing-function: ease-in;
  }
}

</style>