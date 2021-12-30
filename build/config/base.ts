// https://vitejs.dev/config/
import { ConfigEnv } from 'vite'
import fs from 'fs'
import dotenv from 'dotenv'
import path from 'path'
import { createVitePlugins } from '../vite/plugins'
import { createProxy } from '../vite/proxy'
import { PORT } from '../constant'
/**
 * 环境初始化
 * @param mode
 */
export function envInit(mode) {
  const envFile = `./build/env/.env.${mode}`
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

export function genConfig(mode, isBuild) {
  return {
    plugins: createVitePlugins(mode, isBuild),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src'),
        packages: path.resolve(__dirname, '../../packages')
      }
    },
    // css 配置
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
          // antd 定制主题样式
          modifyVars: {
            '@fill-body': '#fff'
          }
        }
      },
      modules: {
        localsConvention: 'camelCase'
      }
    },
    // 开发环境开启代理
    server: {
      host: true,
      port: PORT,
      open: true,
      proxy: createProxy()
    }
  }
}

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build'
  envInit(mode)
  return genConfig(mode, isBuild)
}
