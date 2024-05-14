<template>
  <body id="login-form">
    <header>
      <h1>个人贷款风险控制管理系统</h1>
      <p>LRCM</p>
    </header>
    <div class="introduce">
      <p class="p1">LRCM</p>
      <p class="p1">个人贷款风险控制管理系统</p>
      <p class="p1">-后台管理系统-</p>
    </div>
    <form class="login">
      <p>账号<input class="id" type="text" v-model="username" placeholder="请输入账号" /></p>
      <p>密码<input class="password" type="password" v-model="password" placeholder="请输入密码" /></p>
      <p><button type="button" class="btn blogin" @click="login">确认</button></p>
    </form>
    <p v-if="message">{{ message }}</p>
  </body>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
        alert('账号或密码不能为空');
        return;
      }
      if (this.username === 'a123456' && this.password === 'a123456') {
        // window.location.href = 'https://live.bilibili.com/5050';
        window.location.href = '/homepage';
      } else {
        alert('账号或密码错误');
      }
    }
  }
};
</script>