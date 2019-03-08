# 序言：
## 更新[源代码](https://github.com/qqlcx5/vue-props)
6种方法对应6个分支，不懂的切换分支，可以直接在src替换vue-props文件夹里面文件

下载文件记得先安装依赖，npm install

然后在启动 npm run dev


#### 常用vue通信大概有这几种方式进行：
* 组件间的父子之间的传值
* 组件间的子父之间的传值
* 非组件间的组件间的传值（简称：EventBus）
* sessionStorage缓存传值
* 路由带参数跳转进行传值
* vuex进行传值
## 1. 组件间的父子之间的传值
### 整理下思路：父组件调用子组件dom位置声明一个名称，然后在子组件接收这名称，就可以直接调用

##### 父组件（谁是父组件个人理解：谁引用谁的组件，谁就是父组件）
![image.png](https://upload-images.jianshu.io/upload_images/6206911-b32250662353d45c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
####子组件
![image.png](https://upload-images.jianshu.io/upload_images/6206911-38769c62566e8fb5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 2.组件间的子父之间的传值
### 理一下思路：在子组件通过触发一个事件带值，让父组件接受这个事件，解析这个值
#####子组件
![image.png](https://upload-images.jianshu.io/upload_images/6206911-568d940c57ff70c1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

####父组件
![image.png](https://upload-images.jianshu.io/upload_images/6206911-49de537b2efb7e64.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
<hr>
### 3.非组件间的组件间的传值（简称：EventBus）
我先举个例子来解释下组件间的关联
#####组件A比作一个路由，通过中继器(eventBus.js)让其他房子接收到信号（组件B）

首先在src目录下创建一个eventBus.js文件，复制这行代码进去
~~~
import Vue from 'vue'
let connect = new Vue()    // 实例
export default connect
~~~
###组件A

![image.png](https://upload-images.jianshu.io/upload_images/6206911-2ca1862004e2f24f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###组件B
![image.png](https://upload-images.jianshu.io/upload_images/6206911-462b7d71a2eb8226.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#####效果

![image.png](https://upload-images.jianshu.io/upload_images/6206911-7b00db0e33468171.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/6206911-11e578e73f01bf23.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# sessionStorage
### 组件A，感觉用法和上一篇差不多，就不在一一叙述
![image.png](https://upload-images.jianshu.io/upload_images/6206911-8e18a9e9e0c43008.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 组件B
![image.png](https://upload-images.jianshu.io/upload_images/6206911-cf85f87b92e98ef9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
# 路由带参数跳转
####路由默认的页面
![image.png](https://upload-images.jianshu.io/upload_images/6206911-1eb300574954b5d7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 路由其他页面 children

![image.png](https://upload-images.jianshu.io/upload_images/6206911-f1a894d3dd973694.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 效果
![image.png](https://upload-images.jianshu.io/upload_images/6206911-cb3184e50fd2713f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/6206911-dbc444800e01511a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### vuex主要做数据交互，维护公共状态或数据
#### 多看几遍这图，vuex 基本就会使用，多加运用就会更加熟练
![image.png](https://upload-images.jianshu.io/upload_images/6206911-d6c1b56d64ddc761.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
src下创建一个store的文件夹，里面创建index.js文件

```
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
   state: {
   city: "上海"
   },

   actions: {
     handleCity(ctx, city) {
   // console.log(ctx, city)
       ctx.commit("handleCity", city)
    }
  },
mutations: {
     handleCity(state, city) {
      state.city = city
   }
   }
})
```
#### 某文件触发事件
```
methods: {
    handleCityClick(city) {
      this.$store.dispatch("handleCity", "北京");
    },
```
展示页面
```
<h1>{{this.$store.state.city}}</h1>
```
