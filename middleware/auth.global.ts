// 匿名（或内联）路由中间件直接在页面内定义。
// 命名路由中间件，放置在middleware/页面上使用时并通过异步导入自动加载。
// 全局路线中间件，放置在middleware/带有后缀的位置.global，并在每次路线改变时运行。

// 类似全局前置守卫
export default defineNuxtRouteMiddleware((to, from) => {

  console.log('middleware-->',to,from);
  

  if (to.params.id === '1') {
    //这将中止 Nuxt 路由中间件处理程序内的导航
    return abortNavigation()
  }

  // 检查用户是否已经登录
  const isLoggedIn = to.path !== '/login'; // 这里应该替换为检查用户是否已经登录的逻辑

  // 如果用户未登录，则重定向到登录页面
  if (!isLoggedIn) {
    return navigateTo('/main');
  }
})  