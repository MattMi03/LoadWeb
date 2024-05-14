<template>
  <div id="app">
    <router-view></router-view> <!-- 路由视图，用于显示当前路由对应的组件 -->
  </div>
</template>

<script>
export default {
  name: 'App',
  // 在组件被挂载到 DOM 后自动调用的生命周期钩子函数
  mounted() {
    console.log('App component mounted');
  }
};
</script>

<style>
/* 全局样式 */
</style>
