const page = require("./config/page")
module.exports = {
  title: "ES6标准入门",
  description: "ES6标准入门-vuepress版本",
  base: '/es6-vuepress-version/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    lastUpdated: '最后更新时间', // 最后更新时间
    editLinks: true, // 编辑链接
    editLinkText: '帮助我改善这个页面', // 链接字段
    sidebarDepth: 1,
    markdown: {
      lineNumbers: true // 代码行数
    },
    nav: [
      { text: "GitHub", link: "https://github.com/ruanyf/es6tutorial" }, // 内部链接 以docs为根目录
      { text: "原文地址", link: "http://es6.ruanyifeng.com/" }, // 外部链接
      { text: "关于我", link: "https://github.com/xieyezi" }
    ],
    sidebar: page
  }
}
