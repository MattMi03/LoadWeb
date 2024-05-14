<template>
    <LoginForm />
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: {
    LoginForm
  }
};

</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
* {
  margin: 0;
  padding: 0;
}
#login-form{
  background-color: aqua;
  background-image: url('~@/assets/images/b0.jpg');
  background-size: cover;
}
header {
  height: 3em;
  background-color: rgb(230, 247, 194);
  border-color: rgb(255, 255, 255);
}
header h1 {
  font-size: 15px;
  position: absolute;
  padding-left: 5px;
  padding-top: 15px;
}
header p {
  text-align: right;
  position: relative;
  padding-right: 15px;
  padding-top: 25px;
}
.p1 {
  text-align: center;
  position: relative;
  padding-right: 15px;
  padding-top: 25px;
}
.introduce {
  position: absolute;
  margin-top: 4rem;
  margin-right: 3rem;
  background-color: #f5f7cf;
  width: 400px;
  height: 300px;
  right: 30em;
}
.login {
  position: absolute;
  text-align: center;
  width: 300px;
  height: 200px;
  background-color: #d9f0ff;
  top: 10em;
  right: 10em;
}
.id {
  position: relative;
  margin-left: 20px;
  margin-top: 50px;
}
.password {
  position: relative;
  margin-left: 20px;
  margin-top: 20px;
}
.btn {
  width: 50px;
  font-size: 15px;
}
.blogin {
  position: relative;
  margin: 20px;
  left: 5em;
}

</style>