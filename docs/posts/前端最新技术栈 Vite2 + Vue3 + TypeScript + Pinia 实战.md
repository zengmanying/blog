---
title: "前端最新技术栈 Vite2 + Vue3 + TypeScript + Pinia 实战"
date: 2022-01-01
description: "分享使用前端最新技术栈 Vite2.x + Vue3 + TypeScript + Pinia 开发项目的经验总结"
category: 技术文章
tags:
  - 前端
  - Vite
  - Vue3
  - TypeScript
  - Pinia
---

# 前端最新技术栈 Vite2 + Vue3 + TypeScript + Pinia 实战

大家好，最近开发了一个新的项目，我选择了前端最新的技术栈  Vite2.x + Vue3 + TypeScript + Pinia, 文章是对自己的一个总结，也希望给大家带来一些帮助。

### vite 介绍
-   💡 极速的开发服务器启动 (使用原生 ESM 文件，无需打包!)
-   ⚡️ 轻量快速的热模块重载 (无论应用程序大小如何，都始终极快的模块热重载（HMR）)
-   🛠️ 丰富的功能 (对 TypeScript、JSX、CSS 等支持开箱即用。)
-   📦 自带优化的构建 (可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建)
-   🔩 通用的插件接口 (在开发和构建之间共享 Rollup-superset 插件接口。)
-   🔑 完全类型化的 API (灵活的 API 和完整的 TypeScript 类型)

#### vue-cli 对比

vue-cli:

Vue Cli优点          | Vue Cli缺点 |
| ------------------ | --------- |
| 生态好，应用实际项目多        | 开发环境慢，体验差 |
| 可以和Vue2.x，Vue3.x结合 | 只支持Vue    |
| 直接解析各种类型代码依赖       | 产物冗余代码多   |
| 构建配置项丰富，插件全

Vite:

| Vite优点       | Vite缺点             |
| ------------ | ------------------ |
| 开发环境速度快，体验好  | 只针对ES6浏览器          |
| 支持Vue，React等 | 脚手架不包括Vuex，Router等 |
| 产物简洁清晰

#### 使用
1. 安装vite
```shell
npm create vite@latest
````
2. 选择模版生成脚手架
```shell
### npm 6.x 
npm create vite@latest my-vue-app --template vue 
### npm 7+, extra double-dash is needed: 
npm create vite@latest my-vue-app -- --template vue 
yarn yarn create vite my-vue-app --template vue 
pnpm pnpm create vite my-vue-app -- --template vue
```

查看 [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite) 以获取每个模板的更多细节：`vanilla`，`vanilla-ts`，`vue`，`vue-ts`，`react`，`react-ts`，`preact`，`preact-ts`，`lit`，`lit-ts`，`svelte`，`svelte-ts`。

3. 配置
初始化工程后，我们可以在项目文件夹里看到 vite.config.ts:
```ts
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import Components from "unplugin-vue-components/vite"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
import svgLoader from "vite-svg-loader"

// 路径查找
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir)
}

// 设置别名
const alias: Record<string, string> = {
  "@": pathResolve("src")
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias
  },
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()]
    }),
    // svg组件化支持
    svgLoader()
  ],
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://XXXX/",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  }
})
```

#### 常用插件
1. 官方插件
@vitejs/plugin-vue: 提供 Vue 3 单文件组件支持<br>
@vitejs/plugin-vue-jsx: 提供 Vue 3 JSX 支持<br>
@vitejs/plugin-react: 提供react支持<br>
@vitejs/plugin-legacy: 为打包后的文件提供传统浏览器支持

2. 推荐插件
```unplugin-vue-compoents```
是由 Vue官方人员开发的一款自动引入插件,可以省去大量 import语句。这里以ant-design-vue为例, 在vite-config.ts里引入插件后，我们在vue文件里就可以使用ant-desgin-vue的任意组件而不需要一个个import进来了。插件也会帮我们生成一个 components.d.ts 文件声明我们项目使用的组件
```ts
import Components from "unplugin-vue-components/vite"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()]
    })
  ]
})
```
```vite-svg-loader``` 可以把svg图片组件化。
#### 环境变量配置
```vite``` 提供了2种环境 ```开发环境``` 和 ```生产环境```
可以在根目录下新建 ```.env.development``` ```.env.production``` 来分别对应开发环境变量 和 生产环境变量。 当运行```npm run dev``` 时会加载开发环境变量，当运行```npm run build```时会加载生产环境变量。<br>
如果项目还需要测试环境，也可以新增 ```.env.test```来定义相关的环境变量，在package.json里指定打包测试环境的命令
```json
"scripts": {
    "dev": "vite --port 8080",
    "build": "vue-tsc --noEmit && vite build",
    "testbuild": "vue-tsc --noEmit && vite build --mode test",
    },
```
在组件中使用
```ts
const loadEnv = () => {
  return import.meta.env
}
const { VITE_PROXY_DOMAIN, VITE_PROXY_DOMAIN_REAL } = loadEnv()
```

注意 Vite 默认是不加载 `.env` 文件的，因为这些文件需要在执行完 Vite 配置后才能确定加载哪一个，举个例子，`root` 和 `envDir` 选项会影响加载行为。不过当你的确需要时，你可以使用 Vite 导出的 `loadEnv` 函数来加载指定的 `.env` 文件。
```ts
import { defineConfig, loadEnv } from 'vite' 
export default defineConfig(({ command, mode }) => { 
// 根据当前工作目录中的 `mode` 加载 .env 文件 
// 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。 
const env = loadEnv(mode, process.cwd(), '') 
return { 
    // vite 配置 
    define: { __APP_ENV__: env.APP_ENV } 
    } 
})
```

### vue3
1. 与vue2的区别
(ts重写、optionApi-》compositionApi、生命周期钩子、碎片化、)
2. steup 和 defineComposition

### 代码风格约束
关于eslint和prettier 大家可以看这篇文章，讲得清晰全面 [传送门](https://juejin.cn/post/6990929456382607374)

Vite 项目自动添加 eslint 和 prettier

`vite-pretty-lint`库是一个为`Vite`创建的`Vue`或`React`项目初始化`eslint`和`prettier`的库。
该库的目的是为了让开发者在创建项目时，不需要手动配置`eslint`和`prettier`，而是通过`vite-pretty-lint`库来自动配置。

```shell
npm init vite-pretty-lint 
yarn create vite-pretty-lint 
pnpm create vite-pretty-lint
```
### 路由

```shell
# 安装路由
yarn add vue-router@4
```
在 `src` 文件下新增 `router` 文件夹 => `router.ts` 文件,内容如下:

```ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue'), // 注意这里要带上 文件后缀.vue
  },
]

const router: Router = createRouter({
  history: createWebHistory(), // createWebHashHistory()
  routes: routes,
  strict: true,
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      if (savedPosition) {
        return savedPosition
      } else {
        if (from.meta.saveSrollTop) {
          const top: number =
            document.documentElement.scrollTop || document.body.scrollTop
          resolve({ left: 0, top })
        }
      }
    })
  }
})

router.beforeEach((to, from, next) => {
  nProgress.start()
  if (to.path !== "/login" && !getAuth()) {
    next("/login")
  }
  if (to.path === "/login") {
    removeAuth()
  }
  next()
})

router.afterEach((to, from) => {
  nProgress.done()
})

export default router

```

修改入口文件 `main.ts` :

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)

app.use(router)

app.mount('#app')

```

到这里路由的基础配置已经完成了,更多配置信息可以查看 `vue-router` 官方文档:

> vue-router: `https://next.router.vuejs.org/zh/guide/`


`vue-router4.x` 支持 `typescript`，配置路由的类型是 `RouteRecordRaw`，这里 `meta` 可以让我们有更多的发挥空间，这里提供一些参考：

-   `title`:`string`; 页面标题，通常必选。
-   `icon?`:`string`; 图标，一般配合菜单使用。
-   `auth?`:`boolean`; 是否需要登录权限。
-   `ignoreAuth?`:`boolean`; 是否忽略权限。
-   `roles?`:`RoleEnum[]`; 可以访问的角色
-   `keepAlive?`:`boolean`; 是否开启页面缓存
-   `hideMenu?`:`boolean`; 有些路由我们并不想在菜单中显示，比如某些编辑页面。
-   `order?`:`number`; 菜单排序。
-   `frameUrl?`:`string`; 嵌套外链。

### 接口请求对象

```ts
# 安装 axios
yarn add axios
# 安装 nprogress 用于请求 loading
# 也可以根据项目需求自定义其它 loading
yarn add nprogress
yarn add @types/nprogress --dev
```

封装http对象
```ts
import Axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import {
  PureHttpError,
  RequestMethods,
  PureHttpResponse,
  PureHttpRequestConfig
} from "./types.d"
import qs from "qs"
import NProgress from "../progress"
import { message } from "ant-design-vue"
import { useUserStoreHook } from "@/store/user"

const loadEnv = () => {
  return import.meta.env
}

// 加载环境变量 VITE_PROXY_DOMAIN（开发环境）  VITE_PROXY_DOMAIN_REAL（打包后的线上环境）
const { VITE_PROXY_DOMAIN, VITE_PROXY_DOMAIN_REAL } = loadEnv()

// 相关配置请参考：www.axios-js.com/zh-cn/docs/#axios-request-config-1
const defaultConfig: AxiosRequestConfig = {
  baseURL:
    process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test"
      ? VITE_PROXY_DOMAIN_REAL
      : VITE_PROXY_DOMAIN,
  // 当前使用mock模拟请求，将baseURL制空，如果你的环境用到了http请求，请删除下面的baseURL启用上面的baseURL，并将11行、16行代码注释取消
  // baseURL: "/api",
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  }
  // withCredentials: true
  // 数组格式参数序列化
  // paramsSerializer: params => qs.stringify(params, { indices: false })
}

class PureHttp {
  constructor() {
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }
  // 初始化配置对象
  private static initConfig: PureHttpRequestConfig = {}

  // 保存当前Axios实例对象
  private static axiosInstance: AxiosInstance = Axios.create(defaultConfig)
  private interfaceTimeOut = false
  // 请求拦截
  private httpInterceptorsRequest(): void {
    PureHttp.axiosInstance.interceptors.request.use(
      (config: PureHttpRequestConfig) => {
        const $config = config
        // 开启进度条动画
        NProgress.start()
        // 优先判断post/get等方法是否传入回掉，否则执行初始化设置等回掉
        if (typeof config.beforeRequestCallback === "function") {
          config.beforeRequestCallback($config)
          return $config
        }
        if (PureHttp.initConfig.beforeRequestCallback) {
          PureHttp.initConfig.beforeRequestCallback($config)
          return $config
        }
        // const token = "1234567"
        // if (token) {
        //   const data = JSON.parse(token)
        //   config.headers["Authorization"] = "Bearer " + data.accessToken
        //   return $config
        // } else {
        //   return $config
        // }
        return $config
      },
      error => {
        return Promise.reject(error)
      }
    )
  }

  // 响应拦截
  private httpInterceptorsResponse(): void {
    const instance = PureHttp.axiosInstance
    instance.interceptors.response.use(
      (response: PureHttpResponse) => {
        const $config = response.config
        // 关闭进度条动画
        NProgress.done()
        // 优先判断post/get等方法是否传入回掉，否则执行初始化设置等回掉
        if (typeof $config.beforeResponseCallback === "function") {
          $config.beforeResponseCallback(response)
          return response.data
        }
        if (PureHttp.initConfig.beforeResponseCallback) {
          PureHttp.initConfig.beforeResponseCallback(response)
          return response.data
        }
        // 统一错误信息提示
        if (
          response.data.code &&
          response.data.code !== 0 &&
          response.data.code !== 10010
        ) {
          message.error(response.data.msg)
        }
        return response.data
      },
      (error: PureHttpError) => {
        const $error = error
        $error.isCancelRequest = Axios.isCancel($error)
        // 关闭进度条动画
        NProgress.done()
        // 所有的响应异常 区分来源为取消请求/非取消请求
        return Promise.reject($error)
      }
    )
  }

  // 通用请求工具函数
  public request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: PureHttpRequestConfig
  ): Promise<T> {
    const config = {
      method,
      url,
      ...param,
      ...axiosConfig
    } as PureHttpRequestConfig

    // 单独处理自定义请求/响应回掉
    return new Promise((resolve, reject) => {
      PureHttp.axiosInstance
        .request(config)
        .then((response: any) => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  // 单独抽离的post工具函数
  public post<T, P>(
    url: string,
    params?: T,
    config?: PureHttpRequestConfig
  ): Promise<P> {
    return this.request<P>("post", url, params, config)
  }

  // 单独抽离的get工具函数
  public get<T, P>(
    url: string,
    params?: T,
    config?: PureHttpRequestConfig
  ): Promise<P> {
    return this.request<P>("get", url, params, config)
  }
}

export const http = new PureHttp()

```

`api` : 项目中接口做统一管理，按照模块来划分
```ts
import { http } from "@/utils/http"
import { resultType } from "@/utils/http/types"
import {
  getUserPageRequest,
  addRoleRequest,
  addDeptRequest,
  addCustomerRequest
} from "@/types/user"

export const login = (data: { phoneNumber: string; code: string }) => {
  const params = {
    phone: data.phoneNumber,
    type: "front",
    verifyCode: data.code
  }
  return http.post<unknown, resultType>("/login", { params })
}
```

### 状态管理pinia

Pinia 是 Vue.js 的轻量级状态管理库，它使用 Vue 3 中的新反应系统来构建一个直观且完全类型化的状态管理库。

##### Pinia的优点

-   完整的 TypeScript 支持：与在 Vuex 中添加 TypeScript 相比，添加 TypeScript 更容易
-   极其轻巧(体积约 1KB)
-   store 的 action 被调度为常规的函数调用，而不是使用 dispatch 方法或 MapAction 辅助函数，这在 Vuex 中很常见
-   支持多个Store
-   支持 Vue devtools、SSR 和 webpack 代码拆分

安装命令：

```shell
yarn add pinia@next
```

创建pinia实例

```ts
import type { App } from "vue"
import { createPinia } from "pinia"
const store = createPinia()

export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }
```

设置为全局对象，在`main.ts`中引用
```ts
   import { createApp } from 'vue' 
   import App from './App.vue' 
   import router from './router/index'
   const app = createApp(App)
   // 注册路由
   app.use(router)
   // 注册store
   setupStore(app)
   app.mount('#app')
```
创建store

```ts
import { defineStore } from "pinia"
import { store } from "./index"

export const useUserStore = defineStore({
  id: "pure-user",
  state: (): userType => ({
    lastLoginTime: "",
    name: "",
    roleName: "",
    perPaths: []
  })
  actions: {
    SET_LAST_LOGIN_TIME(lastLoginTime: string) {
      this.lastLoginTime = lastLoginTime
    },
    SET_NAME(name: string) {
      this.name = name
    },
    // 登出 清空缓存
    async logOut() {
      if (!getAuth()) return
      const resp = await loginOut()
      if (resp.code === 20000) {
        router.push("/login")
        removeAuth()
      } else {
        message.error(resp.msg)
      }
    }
  }
})

export function useUserStoreHook() {
  return useUserStore(store)
}
```

在vue中使用
```html
<script setup lang="ts">
    const userStore = useUserStoreHook()
</script>
<template>
<div class="top-header__right">
    <span class="top-header__last-login-time"
      >上次登录时间：{{ userStore.lastLoginTime }}</span
    >
</div>
<logout-outlined
      class="top-header__logout"
      @click="userStore.logOut()"
      style="
        color: #434343;
        font-size: 16px;
        margin-left: 30px;
        margin-right: 8px;
      "
    />
</template>
```

想要使用前端最新技术栈的小伙伴，赶快学习起来吧！！！