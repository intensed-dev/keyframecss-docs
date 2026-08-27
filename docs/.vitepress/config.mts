import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',

  title: 'KeyframeCSS Docs',
  description: 'KeyframeCSS Documentation for all Developers',

  base: '/',

  cleanUrls: true,

  themeConfig: {
    logo: '/logo.png',

    nav: [
      {
        text: 'Modrinth',
        link: 'https://modrinth.com/organization/coffeedevs'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/intensed-dev/KeyframeCSS'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/JNEYvDfQW'
      }
    ],

    sidebar: [
      {
        text: 'KeyframeCSS docs',
        items: [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'Projects',
            link: '/projects'
          }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/intensed-dev/KeyframeCSS'
      },
      {
        icon: 'modrinth',
        link: 'https://modrinth.com/organization/coffeedevs'
      },
      {
        icon: 'discord',
        link: 'https://discord.gg/JNEYvDfQW'
      }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/intensed-dev/keyframecss-docs/edit/main/docs/:path',
      text: 'Edit this page'
    },

    footer: {
      message: 'Made with VitePress by Intensed',
      copyright: 'Copyright © 2026 KeyframeCSS'
    }
  }
})
