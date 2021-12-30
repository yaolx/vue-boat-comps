# vue-boat

vite + vue3 + typescript + vuex + eslint

##. vscode 插件配置

- vue language Features(Volar)

## 初始化 vite 工程

yarn create vite
框架名：vue-boat
选择 framework: vue
选择 varaint: vue-ts
会生成 vue+typescript 基本脚手架

## 配置目录

![image](https://user-images.githubusercontent.com/7429874/140527361-d1e12f4e-6e56-429a-9017-40da70e5e317.png)

## 别名配置

建议用`@/`开头，避免与业界某些 npm 包冲突

- vite.config.ts 用于编译识别用

```js
resolve: {
 alias: {
 '@': path.resolve(__dirname, './src')
 }
}
```

这边 requre 会报错，要先安装 @types/node 包

- tsconfig.json 用于 ts 识别用

```js
"baseUrl": ".",
"paths": {
 "@/*": ["src/*"]
 }
```

## 安装项目依赖

- `vue` ：基础核心
- `vue-router`：路由配置
- `vuex` ：redux 状态管理
- `eslint` & `lint-staged` & `husky` & `prettier`：代码校验配置 `TODO:`

## 路由配置

使用 vue-router 来设置路由

```js
import Home from '@/views/home/index.vue'
import Error from '@/views/error/404.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const routesConfig = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/404',
    name: '404',
    component: Error
  }
]

const routerHistory = createWebHashHistory()
const routers = createRouter({
  history: routerHistory,
  routes: routesConfig
})

export default routers
```

7. 入口 main.tsx 配置路由入口

```js
import { createApp } from 'vue'
import App from '@/App.vue'
import routers from '@/routes'
import store from '@/store/index'
import './index.css'
const app = createApp(App)
app.use(routers).use(store).mount('#app')
```

8. 全局 store 注入

```js
import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

export default createStore({
  state() {
    return defaultState
  },

  mutations: {
    increment(state: typeof defaultState) {
      state.count += 1
    }
  },

  actions: {
    increment(context) {
      context.commit('increment')
    }
  },

  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
```

9. vite 插件配置

vite.config.js 中配置插件

- `@vitejs/plugin-vue`
  热更新
- `@rollup/plugin-eslint`
  eslint 校验
- `@rollup/plugin-typescript`
  typescript 类型校验
- `vite-plugin-mock`
  mock 插件
- `vite-plugin-components`
  根据引入的 antd 组件，按需导入样式
- `@vitejs/plugin-legacy`
  浏览器兼容性适配

10. eslint 配置

安装
`eslint`
`eslint-plugin-import`
`eslint-plugin-react`
`@typescript-eslint/eslint-plugin`
`@typescript-eslint/parser`
[彻底搞懂 eslint,prittier](https://juejin.cn/post/6909788084666105864)

11. pre-commit 配置

安装`lint-staged husky@4.3.8 prettier`依赖，用来提交代码的时候，进行检测，并自动修复格式化代码

```js
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{ts,tsx}": [
      "eslint --cache --fix",
      "git add"
    ],
    "src/**/*.{js,jsx}": [
      "eslint --cache --fix",
      "git add"
    ]
  },
}
```

12. axios 配置

```js
yarn add axios --dev
```

增加 request 请求文件，对 axios 进行封装
主要在拦截器中增加以下几个功能
1）重复请求做加载中处理，并取消接口请求
2）头部参数配置，比如鉴权
3）错误信息处理

13. 环境配置

重写 vite 读取配置文件的逻辑
把环境配置放到 config 的 env 中

```js
function envInit(mode) {
  const envFile = `./config/env/.env.${mode}`
  try {
    fs.accessSync(envFile, fs.constants.F_OK)
    const envConfig = dotenv.parse(fs.readFileSync(envFile))
    for (const k in envConfig) {
      if (Object.prototype.hasOwnProperty.call(envConfig, k)) {
        process.env[k] = envConfig[k]
      }
    }
  } catch (error) {
    console.log('配置文件不存在，忽略')
  }
}
```

页面通过`import.meta.env`获取环境配置参数

`package.json`的 scripts 中增加启动配置命令

```js
"start:mock": "vite -m mock",
"start:test": "vite -m test",
"start:product": "vite -m product",
```

通过 `yarn run start:mock` 运行项目
在`page/home/index`中点击`请求数据`，测试 mock 接口，看到接口正常返回，验证 ok

14. 构建优化

- 使用包分析工具`rollup-plugin-visualizer`，打包测试
  `yarn run build:test`出来的结果发现`react-dom.development.js`是开发者模式，
  react 的其他依赖也是。
  遂将`yarn run build:product` 调整为 `yarn run build:production`，打包后发现
  `react-dom.development.js`变成`react-dom.production.min.js`
  vendor 的大小减少了几百 K。
- 将 react 调整到 html 文件中，通过 script 作为第三方库引入。

16. jest

单元测试
