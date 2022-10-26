import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { navbar, sidebar } from './configs'
export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: 'neuro-symbolic lab',
  description: 'We are ...',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    
    sidebar: sidebar.zh,
    navbar: navbar.zh,

    // question
    editLinkText: "对此内容感兴趣/想要与我们联系？",
    editLinkPattern:"emailto://a.b@c.d",
    // 404 page
    notFound: [
      '此处待研究',
      '这是我们还没有企及的领域',
      '欢迎来到我们实验室了解更多',
    ],
    backToHome: '返回首页',
  },
})