export default defineNuxtPlugin(NuxtApp=>{
  console.log(NuxtApp);
  
return {
  provide: {
    sayHello: (name:string) => {
      // 这里可以执行任何代码
      console.log('Hello from plugin!'+name)
    }
  }
}
  
})