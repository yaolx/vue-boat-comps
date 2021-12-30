const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [
        { text: 'Button 按钮', link: '/component/button/' },
        { text: 'Dialog 对话框', link: '/component/dialog/' }
      ]
    },
    {
      text: '导航'
    },
    {
      text: '反馈'
    },
    {
      text: '数据录入'
    },
    {
      text: '数据展示'
    },
    {
      text: '布局'
    }
  ]
}

const config = {
  themeConfig: {
    sidebar
  }
  /*  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  } */
}

export default config
