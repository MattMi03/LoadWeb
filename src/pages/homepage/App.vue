<template>

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>主页</title>
  </head>

  <body>
    <header>
      <h1>个人贷款风险控制管理系统</h1>
      <p>LRCM</p>
      <button @click="pageSelect(0)" class="bhome">主页</button>
      <button @click="delogin" class="bdelogin">退出登录</button>
    </header>

    <div class="list">
      <div class="user_info">
        <div class="circle">
          <img src="~@/assets/images/100.png" class="avatar" />
        </div>
        <p class="user_name">a123456</p>
      </div>
      <div class="pages">
        <p>
          <button @click="pageSelect(1)" class="page" id="page1">风险系数管理</button>
        </p>
        <p>
          <button @click="pageSelect(2)" class="page" id="page2">已有产品管理</button>
        </p>
        <p><button @click="pageSelect(3)" class="page" id="page3">客户管理</button></p>
        <p><button @click="pageSelect(4)" class="page" id="page4">信息传送</button></p>
        <p><button @click="pageSelect(5)" class="page" id="page5">贷款处理</button></p>
      </div>
    </div>
    <div class="main_window">
      <component :is="currentComponent" />
    </div>
  </body>
</template>

<script>


import MainWindow from '@/components/home/MainWindow.vue';
import RiskManagement from '@/components/home/RiskManagement.vue';
import ProductManage from '@/components/home/ProductManage.vue';
import CustomerManage from '@/components/home/CustomerManage.vue';
import InfoSend from '@/components/home/InfoSend.vue';
import LoanHandle from '@/components/home/LoanHandle.vue';

export default {
  components: {
    MainWindow,
    RiskManagement,
    ProductManage,
    CustomerManage,
    InfoSend,
    LoanHandle,
  },
  data() {
    return {
      currentComponent: 'MainWindow',
    };
  },
  methods: {
    pageSelect(page) {
      switch (page) {
        case 0:
          this.currentComponent = 'MainWindow';
          break;
        case 1:
          this.currentComponent = 'RiskManagement';
          break;
        case 2:
          this.currentComponent = 'ProductManage';
          break;
        case 3:
          this.currentComponent = 'CustomerManage';
          break;
        case 4:
          this.currentComponent = 'InfoSend';
          break;
        case 5:
          this.currentComponent = 'LoanHandle';
          break;
        default:
          this.currentComponent = 'MainWindow';
          break;
      }
    },
    delogin() {
      let ifdelogin = window.confirm("是否确认登出？");
      if (ifdelogin) {
        alert("成功登出");
        window.location.href = "/";
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

header {
  height: 3em;
  width: 100%;
  background-color: rgb(14, 14, 14);
  border-color: rgb(255, 255, 255);
  z-index: 1;
  position: fixed;
  top: 0;
}

header h1 {
  font-size: 1rem;
  position: fixed;
  top: 1rem;
  left: 1rem;
  color: #ffffff;
}

header p {
  font-size: 0.5rem;
  position: fixed;
  top: 1rem;
  color: #ffffff;
}

.bhome {
  position: fixed;
  width: 50px;
  height: 20px;
  left: 15rem;
  top: 1rem;
  z-index: 1;
  background-color: #000;
  color: #ffffff;
}

.bdelogin {
  position: fixed;
  width: 5rem;
  height: 20px;
  left: 20rem;
  top: 1rem;
  z-index: 1;
  background-color: #000;
  color: #ffffff;
}

header p {
  text-align: right;
  position: fixed;
  top: 1.5rem;
  right: 3rem;
}

body {
  background-color: rgb(227, 227, 227);
  top: 0;
}

.Avatar {
  height: 100;
  width: 100;
}

.list {
  position: fixed;
  top: 3rem;
  height: 45rem;
  width: 10rem;
  background-color: #1f1c1c;
}

.list .circle {
  border-radius: 100%;
  overflow: hidden;
  width: 75px;
  height: 75px;
}

.list .avatar {
  height: 100%;
}

.list .user_info {
  position: absolute;
  margin-top: 1.5rem;
  margin-left: 3rem;
  text-align: center;
}

.list .user_name {
  margin-top: 1rem;
  color: #ede0e0;
}

.list .pages {
  position: absolute;
  text-align: center;
  margin-top: 10rem;
}

.list .pages button {
  font-size: 15px;
  font-style: italic;
  margin-top: 2rem;
  margin-left: 0.5rem;
  width: 9.5rem;
  height: 4rem;
  border-style: none;
  background-color: rgba(255, 255, 255, 0.438);
  background-size: 10rem, 4rem;
  background-image: url(~@/assets/images/button2.png) no-repeat;
}

.list .pages button {
  height: 44px;
  padding: 0 15px;
  line-height: 1.2;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 0.2s;
  outline: none;
  position: relative;
}

.list .pages button::before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: #000;
  border: inherit;
  border-color: #000;
  border-radius: inherit;
  transform: translate(-50%, -50%);
  opacity: 0;
  content: " ";
}

.list .pages button:active::before {
  opacity: 0.1;
}

.main_window {
  margin-left: 10rem;
  position: relative;
  height: 45rem;
  top: 3rem;
}

.functitle {
  margin-top: 10px;
  text-align: center;
}
</style>